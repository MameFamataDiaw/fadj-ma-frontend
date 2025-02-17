'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { FaAngleDoubleRight, FaChevronRight, FaChevronDown, FaPlus, FaChevronLeft } from "react-icons/fa";

interface Groupe {
    _id: string;
    nomGroupe: string;
}

interface Medicament {
    _id: string;
    nom: string;
    idMedicament: string;
    groupe?: Groupe;
    stock: number;
}

const Container = styled.main`
    // display: flex;
    // flex-direction: column;
    // width: 80%;
    // height: 90vh;
    // // margin-top: 100px;
    // margin-left: 20%;
    // bottom: 0;

    background-color: #EDF1F5;
    flex: 1;
    display: flex;
    flex-direction: column;
    // width: 80%;
    margin-left: 250px;
    min-height: 100vh;
    margin-top: 50px;
    padding: 20px;

    @media (max-width: 480px){
        width: 100%;
        margin-left: 0;
    }
`

// const MainContent = styled.div`
    // flex: 1;
    // background-color: #EDF1F5;
    // display: flex;
    // flex-direction: column;
    // padding: 1rem 2rem;
// `;
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 480px){
        // flex-direction: column;
        
    }
`
const HeaderText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    // margin-top: 20px;
`
const Header = styled.h2`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    color: #1D242E;
    margin-bottom: 0;

    @media (max-width: 480px){
        font-size: 16px;
    }
`
const ListText = styled.p`
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #1D242E;
    margin-top: 0;

    @media (max-width: 480px){
        font-size: 12px;
    }
`
const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    @media (max-width: 480px){
        flex-direction: column;
    }
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

    @media (max-width: 480px){
        width: 200px;
        margin-bottom: 10px;
    }
`
const NewMedicLink = styled.button`
    width: 217px;
    height: 40px;
    background: #FFFFFF;
    border: 0.4px solid #000000;
    border-radius: 4px;
    // padding: 8px;
    margin-bottom: 0;
    a{
        text-decoration: none;
        font-family: 'Poppins',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #000000;
    }

    @media (max-width: 480px){
        // display: none;

        a{
            font-size: 12px;
        }
    }
`
const FilterSelect = styled.select`
    padding: 10px;
    font-size: 14px;
    // margin-left: 10px;
    text-align: center;
    border: 1px solid #000000;
    border-radius: 4px;
    width: 217px;
    height: 38px;
    cursor: pointer;
`

const TableContainer = styled.div`
    
    // @media (max-width: 480px){
    // width: 100%;
    //    overflow-x: auto;
    //    white-space: nowrap;
    // }
`
const Table = styled.table`
    width: 100%;
    height: auto;
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

    @media (max-width: 480px){
        &:nth-child(2),&:nth-child(3) { 
            display: none;
        }

        font-size: 12px;
    }
    
`;
const TableRow = styled.tr`
    &:nth-child(even) {
       background-color: #f9f9f9;
    }
`
const TableCell = styled.td`
    padding: 10px;
    border-bottom: 0.4px solid #1D242E;
    font-family: 'Poppins',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    color: #1D242E;

    button{
        background: none;
        border: none;
        cursor: pointer;
    }

    @media (max-width: 480px){
        &:nth-child(2),&:nth-child(3) { 
            display: none;
        }

        font-size: 12px;
    }
`;

const ActionButton = styled.a`
    color: #1D242E;
    cursor: pointer;
    font-size: 16px;
    
`
const PaginationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    position: right;

    span{
        font-family: 'Poppins',sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color:#000000;
    }

    button{
        border: 1px;
        border-radius: 100%;
        background: #FFFFFF;
    }
`

const AddIcon = styled(FaPlus)`
    // cursor: pointer;
    // align-items: left;
    // margin-left: auto;
    text-align: center;

  @media (min-width: 481px) {
    // display: none;
  }
`;

const InventoryPage: React.FC = () => {
    const [medicaments, setMedicaments] = useState<Medicament[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredMedicaments, setFilteredMedicaments] = useState<Medicament[]>([]);
    const [groupFilter, setGroupFilter] = useState('');
    const [totalCount, setTotalCount] = useState(0);
    const [groupes, setGroupes] =  useState<{_id: string; nomGroupe: string }[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            router.push("/login"); // Redirige si l'utilisateur n'est pas authentifié
        }
    }, []);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/groupes');
                setGroupes(response.data);
            } catch (error) {
                console.error("Erreur lors de la recuperation des groupes", error)
            }
        };
        fetchGroups();
    }, []);

    useEffect(() => {
        fetchMedicaments();
    }, []);

    useEffect(() => {
        handleSearchAndFilter();
    }, [searchTerm, groupFilter, medicaments]);

    const fetchMedicaments = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/medicaments');
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
            {/* <MainContent> */}
            <HeaderContainer>
                <HeaderText>
                    <Header>médicaments ({totalCount})</Header>
                    <ListText>Liste des médicaments disponibles a la vente</ListText>
                </HeaderText>
                <NewMedicLink>
                    <a href="/medicament"><AddIcon /> Nouveau médicament</a>
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
                {/* <FaSearch/> */}
                {/* Filtre de groupe */}
                <FilterSelect value={groupFilter} onChange={(e) => setGroupFilter(e.target.value)}>
                    <option value="">Selectionnez un groupe</option>
                    {groupes.map((groupe?) => (
                        <option key={groupe?._id} value={groupe?.nomGroupe}>
                            {groupe?.nomGroupe}
                        </option>
                    ))}
                </FilterSelect>
            </SearchContainer>
            {/* Tableau des médicaments */}
            <TableContainer>
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
                            <button onClick={() => handleDetails(med._id)}>Voir tous les détails  <FaAngleDoubleRight style={{ fontSize: "10px", color: "#1D242E" }} /></button>
                        </TableCell>
                    </TableRow>
                ))}
                </tbody>
            </Table>
            </TableContainer>
            <PaginationContainer>
                <span>Affichage de {itemsPerPage * (currentPage - 1) + 1} à {Math.min(currentPage * itemsPerPage, filteredMedicaments.length)} résultats sur {filteredMedicaments.length}</span>
                <div>
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        <FaChevronLeft style={{ fontSize: "10px", color: "#1D242E"}} />
                    </button>
                    <span>  Page {currentPage} <FaChevronDown style={{ fontSize: "8px", color: "#1D242E"}} />  </span>
                    {/* <span>Page {currentPage} sur {totalPages}</span> */}
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                       <FaChevronRight style={{ fontSize: "10px", color: "#1D242E"}} />
                    </button>
                </div>
            </PaginationContainer>
            {/* </MainContent> */}
        </Container>
    );
}
export default InventoryPage;