'use client'
import { useCallback } from 'react';
import styled from 'styled-components';
// import { FaThLarge, FaPills, FaSignOutAlt } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import Image from 'next/image';
import { useUser } from '../../context/UserContext';

interface MenuItem {
    path: string;
    icon: React.ReactNode;
    label: string;
}

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const SidebarContainer = styled.aside<{$isOpen: boolean}>`
    width: 20%;
    height: auto;
    background-color: #283342;
    color: white;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    padding-top: 30px;
    position: fixed;
    // left: 0;
    left: ${({ $isOpen }) => ($isOpen ? "0" : "-250px")};
    transition: left 0.3s ease-in-out;
    z-index: 1000;
    top: 0;
    bottom: 0;
     
    @media (max-width: 912px){
        // display: block;
        width: 250px;
        height: 100vh;
        margin-top: 0;
    }
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 24px;
    position: absolute;
    top: 10px;
    right: 15px;
    cursor: pointer;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
`;


const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    padding: 0 20px;
    gap: 10px;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 35px;
  overflow: hidden;
  border: 0.4px solid #888888;
`;

const ProfileText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    //align-items: center;
    //margin-top: 20px;
`

const ProfileName = styled.h4`
    font-family: 'Poppins',sans-serif;
    //font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
    margin: 0;
`
const ProfileRole = styled.p`

    font-family: 'Poppins',sans-serif;
    //font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    color: #FED600;
    //margin-top: 2px;
    margin: 0;
`
const Menu = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const MenuLink = styled.a<{ $isActive: boolean }>`
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;
    background-color: ${props => props.$isActive ? '#009688' : 'transparent'};
    &:hover {
        background-color: ${props => props.$isActive ? '#009688' : '#1e2a38'};
    }
`;
const IconContainer = styled.span`
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
`
const LogoutButton = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background: none;
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: background-color 0.2s ease-in-out;
  margin-top: auto;
`;

const FooterContainer = styled.div`
    text-align: center;
    padding: 10px;    
    background-color: #1D242E;
`
const Footer = styled.span`
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
  }
`

// Menu items configuration
const menuItems: MenuItem[] = [
    {
        path: '/',
        icon: <Image src="/Vector (2).png"
            alt="Profile"
            width={14}
            height={14}
            style={{ objectFit: 'cover', padding: '5px' }}
            priority
        />,
        label: 'Tableau de bord'
    },
    {
        path: '/medicament/list',
        icon: <Image src="/Group (1).png"
            alt="Profile"
            width={14}
            height={14}
            style={{ objectFit: 'cover', padding: '5px' }}
            priority
        />,
        label: 'Médicaments'
    }
];

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const { user, setUser } = useUser();//acceder aux informations de l'utilisateur depuis le contexte

    console.log("User dans Sidebar:", user);

    const handleLogOut = useCallback(() => {
        document.cookie = 'token=; Max-Age=0; path=/; secure; samesite=strict;';
        setUser(null);
        router.push('/login');
    }, [router, setUser]);


    return (
        <>
             {isOpen && <Overlay />} {/* Ajoute un fond gris pour masquer le reste */}
            <SidebarContainer $isOpen={isOpen}>
                {/* <CloseButton onClick={toggleSidebar}>✖</CloseButton> */}
                <ProfileContainer>
                    <ProfileImageWrapper>
                        <Image src="/natalia.png"
                            alt="Profile"
                            fill
                            sizes="42px"
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </ProfileImageWrapper>
                    <ProfileText>
                        <ProfileName>
                            {user ? `${user.prenom} ${user.nom}` : 'Chargement...'}
                        </ProfileName>
                        <ProfileRole>{user?.role || 'Chargement...'}</ProfileRole>
                        {/* <ProfileName>Moussa Fall</ProfileName>
                    <ProfileRole>Admin</ProfileRole> */}
                    </ProfileText>
                </ProfileContainer>

                <Menu>
                    {menuItems.map((item) => (
                        <MenuLink
                            key={item.path}
                            href={item.path}
                            $isActive={pathname === item.path}
                            onClick={(e) => {
                                e.preventDefault();
                                router.push(item.path);
                            }}
                        >
                            <IconContainer>{item.icon}</IconContainer>
                            {item.label}
                        </MenuLink>
                    ))}
                </Menu>

                <LogoutButton onClick={handleLogOut}>
                    <IconContainer>
                        <Image src="/back.png"
                            alt="Profile"
                            width={14}
                            height={14}
                            sizes="42px"
                            style={{ objectFit: 'cover' }}
                            priority
                        />
                    </IconContainer>
                    Déconnexion
                </LogoutButton>
                <FooterContainer>
                    <Footer>Propulsé par Red Team © 2024 version 1.1.2</Footer>
                </FooterContainer>
            </SidebarContainer>

             {/* Overlay pour fermer en cliquant à l'extérieur */}
             {isOpen && <Overlay onClick={toggleSidebar} />}
        </>
    );
};