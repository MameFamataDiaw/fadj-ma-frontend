'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface Groupe {
    nomGroupe: string;
    // autres propriétés...
}

interface Medicament {
    _id: string;
    nom: string;
    idMedicament: string;
    groupe?: Groupe;
    stock: number;
}

const Container = styled.div`
    padding: 10px 30px;
    max-width: 97%;
    margin: 0;
    height: 99%;
    background: #EDF1F5;
`
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    padding-top: 20px;
`
const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
`
const Header = styled.h2`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: #1D242E;
    margin-bottom: 0;
`
const ListText = styled.p`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #1D242E;
    margin-top: 0;
`
const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`
const SearchInput = styled.input`
    padding: 8px;
    width: 270px;
    height: 36px;
    box-sizing: border-box;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #071222;
    background: #E3EBF3;
    border: 0.2px solid #071222;
    border-radius: 4px;
`
const NewMedicLink = styled.button`
    width: 217px;
    height: 40px;
    background: #FFFFFF;
    border: 0.4px solid #000000;
    border-radius: 4px;
    padding: 8px;
    margin-bottom: 0;
    a{
        text-decoration: none;
        font-family: 'Poppins',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        color: #000000;
    }
`
const FilterSelect = styled.select`
    padding: 10px;
    font-size: 16px;
    margin-left: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 217px;
    height: 38px;
`
const Table = styled.table`
    width: 100%;
    height: 400px;
    position: relative;
    justify-content: center;
    background: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    border-collapse: collapse;
    margin-top: 10px;
`
const TableHeader = styled.th`
    padding: 10px;
    border-bottom: 1px solid  #1D242E;
    text-align: left;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #1D242E;
    
`;
const TableRow = styled.tr`
    //&:nth-child(even) {
    //    background-color: #f9f9f9;
    //}
`
const TableCell = styled.td`
    padding: 10px;
    border-bottom: 0.4px solid #1D242E;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #1D242E;
`
const ActionButton = styled.a`
    color: #1D242E;
    background: none;
    cursor: pointer;
    font-size: 16px;
    text-decoration: none;
`
const PaginationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

const InventoryPage: React.FC = () => {
    const [medicaments, setMedicaments] = useState<Medicament[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMedicaments, setFilteredMedicaments] = useState<Medicament[]>([]);
    const [groupFilter, setGroupFilter] = useState('');
    const [totalCount, setTotalCount] = useState(0);
    const [selectedGroup, setSelectedGroup] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const router = useRouter();

    useEffect(() => {
        fetchMedicaments();
    }, []);

    useEffect(() => {
        handleSearchAndFilter();
    }, [searchTerm, groupFilter, medicaments]);

    const fetchMedicaments = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/medicaments');
            setMedicaments(response.data);
            setTotalCount(response.data.length);
        } catch (error) {
            console.error("Erreur lors du chargement des médicaments :", error);
        }
    };

    const handleSearchAndFilter = () => {
        const searchLower = searchTerm.toLowerCase();
        const filtered = medicaments.filter(med => {
            const matchSearch = med.nom.toLowerCase().includes(searchLower) || med.idMedicament.toLowerCase().includes(searchLower);
            const matchGroup = groupFilter ? med.groupe?.nomGroupe === groupFilter : true;
            return matchSearch && matchGroup;
        });
        setFilteredMedicaments(filtered);
    };

    const handleDetails = (id: string) => {
        router.push(`/medicament/details/view/${id}`);
    };

    // Pagination logic
    const totalPages = Math.ceil(filteredMedicaments.length / itemsPerPage);
    const displayedMedicaments = filteredMedicaments.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    return(
        <Container>
            <HeaderContainer>
                <HeaderText>
                    <Header>médicaments ({totalCount})</Header>
                    <ListText>Liste des médicaments disponibles a la vente</ListText>
                </HeaderText>
                <NewMedicLink>
                    <a href="/medicament">Nouveau médicament</a>
                </NewMedicLink>
            </HeaderContainer>

            <SearchContainer>
                {/* Barre de recherche*/}
                <SearchInput
                    type="text"
                    placeholder="Rechercher dans l'inventaire des médicaments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* Filtre de groupe */}
                <FilterSelect value={groupFilter} onChange={(e) => setGroupFilter(e.target.value)}>
                    <option value="">Selectionnez un groupe</option>
                    <option value="Medecine generique">Médecine générique</option>
                    <option value="Antibiotiques">Antibiotiques</option>
                    <option value="Antihypertenseurs">Antihypertenseurs</option>
                    <option value="Diabete">Diabete</option>
                    <option value="Maladies cardiovasculaires">Maladies cardiovasculaires</option>
                    <option value="Produits à base de plantes">Produits à base de plantes</option>
                    <option value="Crèmes et pommades cutanées">Crèmes et pommades cutanées</option>
                    <option value="Gels et sprays anti-inflammatoires">Gels et sprays anti-inflammatoires</option>
                </FilterSelect>
            </SearchContainer>
            {/* Tableau des médicaments */}
            <Table>
                <thead>
                <tr>
                    <TableHeader>Nom du médicament</TableHeader>
                        <TableHeader>ID du médicament</TableHeader>
                        <TableHeader>Nom de groupe</TableHeader>
                        <TableHeader>Stock en quantié</TableHeader>
                        <TableHeader>Action</TableHeader>
                    </tr>
                </thead>
                <tbody>
                {filteredMedicaments.map((med)  => (
                    <TableRow key={med._id}>
                        <TableCell>{med.nom}</TableCell>
                        <TableCell>{med._id}</TableCell>
                        <TableCell>{med.groupe?.nomGroupe || 'Groupe non spécifié'}</TableCell>
                        <TableCell>{med.stock}</TableCell>
                        <TableCell>
                            {/*<Link href="/medicament/details" passHref>*/}
                            {/*    <ActionButton>*/}
                            {/*        Voir tous les details »*/}
                            {/*    </ActionButton>*/}
                            {/*</Link>*/}
                            <button onClick={() => handleDetails(med._id)}>Voir tous les détails</button>
                        </TableCell>
                    </TableRow>
                ))}
                </tbody>
            </Table>
            <PaginationContainer>
                {/*<span>Affichage de {itemsPerPage * (currentPage - 1) + 1} à {Math.min(currentPage * itemsPerPage, filteredMedications.length)} résultats sur {filteredMedications.length}</span>*/}
                <div>
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        ‹ Précédent
                    </button>
                    <span>Page {currentPage} sur {totalPages}</span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Suivant ›
                    </button>
                </div>
            </PaginationContainer>
        </Container>
    );
}
export default InventoryPage;