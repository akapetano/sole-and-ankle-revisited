import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  function toggleMobileMenu() {
    setShowMobileMenu((currentState) => !currentState);
  }

  function closeMobileMenu() {
    setShowMobileMenu(false);
  }

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileNav>
          <ShoppingBagIconButton>
            <Icon id="shopping-bag" size={24} />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagIconButton>
          <IconButton>
            <Icon id="search" size={24} />
            <VisuallyHidden>Search</VisuallyHidden>
          </IconButton>
          <IconButton>
            <Icon id="menu" size={24} onClick={toggleMobileMenu} />
            <VisuallyHidden>Menu</VisuallyHidden>
          </IconButton>
        </MobileNav>
        <Filler />
      </MainHeader>

      <MobileMenu isOpen={showMobileMenu} onDismiss={closeMobileMenu} />
    </header>
  );
};

const IconButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  height: 100%;
  width: 100%;
`;

const ShoppingBagIconButton = styled(IconButton)`
  transform: translateX(-2px);
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tabletAndSmaller} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
    align-items: center;
  }

  @media ${QUERIES.tabletAndSmaller} {
    padding-inline: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    display: flex;
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
