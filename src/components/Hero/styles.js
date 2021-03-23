import styled from 'styled-components';

import { Row } from 'react-bootstrap';

import mainImg from '../../assets/bg-main';
import mainImgMobile from '../../assets/imgs/bg-main-mobile.jpg';

export const Hero = styled(mainImg)`
  background: url(${mainImg}) no-repeat;
  background-size: cover;
  min-height: 100vh;

  @media (max-width: 767.98px) {
    & {
      height: auto;
      background: url(${mainImgMobile});
      padding-bottom: var(--gap-lg);
    }
  }
`;

export const HeroContent = styled(Row)`
  height: 80vh;
  align-items: center;
`;

export const Title = styled.h1`
  color: var(--support-color-1);
  text-align: center;

  @media (max-width: 767.98px) {
    margin-top: var(--gap-lg);
  }

  &::after {
    content: '';
    display: block;
    margin: var(--gap-sm) auto var(--gap-sm) auto;
    width: 1.875rem;
    height: 0.25rem;
    background: var(--base-color);
    opacity: 40%;
  }
`;

export const Tagline = styled.p`
  color: var(--support-color-1);
  text-align: center;
  margin: 0 auto var(--gap-md) auto;
  font-size: 1.5rem;

  @media (max-width: 767.98px) {
    font-size: 1.125rem;
  }
`;
