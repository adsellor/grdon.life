import React from 'react';
import Helmet from 'react-helmet';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const Text = styled.div`
  margin: 2rem 10rem;
`;

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">Grdon blog</Header>
    <Container center={center}>
      <Text>
        <h3>This is a grdon site for grdon blog</h3>
      </Text>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
