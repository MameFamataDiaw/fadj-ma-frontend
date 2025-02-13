'use client'
import { useCallback } from 'react';
import styled from 'styled-components';
import { FaThLarge, FaPills, FaSignOutAlt } from "react-icons/fa";
import { useRouter, usePathname } from "next/navigation";
import Image from 'next/image';
import { useUser } from '../../context/UserContext';

interface MenuItem {
    path: string;
    icon: React.ReactNode;
    label: string;
}

const SidebarContainer = styled.aside`
    width: 20%;
    height: auto;
    background-color: #283342;
    color: white;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    padding-top: 30px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
     
    @media (max-width: 480px){
        display: none;
    }
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
  &:hover {
    background-color: #1e2a38;
  }
`;

// Menu items configuration
const menuItems: MenuItem[] = [
    {
        path: '/',
        icon: <FaThLarge />,
        label: 'Tableau de bord'
    },
    {
        path: '/medicament/list',
        icon: <FaPills />,
        label: 'Médicaments'
    }
];

export default function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const { user } = useUser();//acceder aux informations de l'utilisateur depuis le contexte

    console.log("User dans Sidebar:", user);

    const handleLogOut = useCallback(() => {
        document.cookie = 'token=; Max-Age=0; path=/; secure; samesite=strict;';
        router.push('/login');
    }, [router]);


    return (
        <SidebarContainer>
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
                    <ProfileName>{user?.prenom || 'Prénom'} {user?.nom || 'Nom'}</ProfileName>
                    <ProfileRole>{user?.role || 'Rôle'}</ProfileRole>
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
                    <FaSignOutAlt />
                </IconContainer>
                Déconnexion
            </LogoutButton>
        </SidebarContainer>
    );
}