'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from "next/link";

const Container = styled.div`
    padding: 20px;
    width: 944px;
    height: 610px;
    position: absolute;
    margin: auto;
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
    width: 900px;
    height: 400px;
    position: relative;
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

const InventoryPage = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGroup, setSelectedGroup] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    // Exemple de données (vous pouvez les remplacer par des données dynamiques provenant d'une API)
    const medications = [
        { name: 'Augmentin 625 Duo Comprimé', id: 'D06ID232435454', group: 'Médecine générique', stock: 350 },
        { name: 'Azithral-500 Comprimé', id: 'D06ID232435451', group: 'Médecine générique', stock: 20 },
        { name: 'Azithral-500 Comprimé', id: 'D06ID232435451', group: 'Médecine générique', stock: 20 },
        { name: 'Azithral-500 Comprimé', id: 'D06ID232435451', group: 'Médecine générique', stock: 20 },
        { name: 'Azithral-500 Comprimé', id: 'D06ID232435451', group: 'Médecine générique', stock: 20 },
        { name: 'Azithral-500 Comprimé', id: 'D06ID232435451', group: 'Médecine générique', stock: 20 },
        { name: 'Azithral-500 Comprimé', id: 'D06ID232435451', group: 'Médecine générique', stock: 20 },
        { name: 'Azithral-500 Comprimé', id: 'D06ID232435451', group: 'Médecine générique', stock: 20 },

    ];

    const filteredMedications = medications.filter((medication) =>
        medication.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedGroup === '' || medication.group === selectedGroup)
    );

    const itemsPerPage = 8;
    const totalPages = Math.ceil(filteredMedications.length / itemsPerPage);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);
    const handleGroupChange = (e: React.ChangeEvent<HTMLSelectElement>) => setSelectedGroup(e.target.value);

    const displayedMedications = filteredMedications.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return(
        <Container>
            <HeaderContainer>
                <HeaderText>
                    <Header>médicaments {/*({filteredMedications.length})*/}</Header>
                    <ListText>Liste des médicaments disponibles a la vente</ListText>
                </HeaderText>
                <NewMedicLink>
                    <a href="/medicament">Nouveau médicament</a>
                </NewMedicLink>
            </HeaderContainer>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Rechercher dans l'inventaire des medicaments..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <FilterSelect onChange={handleGroupChange}>
                    <option value="">Selectionnez un groupe</option>
                    <option value="Medecine generique">Médecine générique</option>
                    <option value="Antibiotiques">Antibiotiques</option>
                    <option value="Antihypertenseurs">Antihypertenseurs</option>
                    <option value="Diabete">Diabete</option>
                    <option value="Maladies cardiovasculaires">Maladies cardiovasculaires</option>
                    <option value="Produits à base de plantes">Produits à base de plantes</option>
                    <option value="Produits à base de plantes">Crèmes et pommandes cutanées</option>
                    <option value="Produits à base de plantes">Gels et sprays anti-inflammatoires</option>
                </FilterSelect>
            </SearchContainer>
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
                {filteredMedications.map((med, index) => (
                    <TableRow key={index}>
                        <TableCell>{med.name}</TableCell>
                        <TableCell>{med.id}</TableCell>
                        <TableCell>{med.group}</TableCell>
                        <TableCell>{med.stock}</TableCell>
                        <TableCell>
                            <Link href="/medicament/details" passHref>
                                <ActionButton>
                                    Voir tous les details »
                                </ActionButton>
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
                </tbody>
            </Table>
            <PaginationContainer>
                <span>Affichage de {itemsPerPage * (currentPage - 1) + 1} à {Math.min(currentPage * itemsPerPage, filteredMedications.length)} résultats sur {filteredMedications.length}</span>
                <div>
                    <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1}>
                        ‹
                    </button>
                    Page 0{currentPage}
                    <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                            disabled={currentPage === totalPages}>
                        ›
                    </button>
                </div>
            </PaginationContainer>
        </Container>
    );
}
export default InventoryPage;