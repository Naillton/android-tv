import React from 'react';
import { FlatList } from 'react-native';
import {
  Container,
  Item,
  ContainerList,
} from './styles';
import cine1 from "../../assets/cine1.jpg";
import cine2 from "../../assets/cine2.jpg";
import cine3 from "../../assets/cine3.jpg";
import cine4 from "../../assets/cine4.jpg";
import cine5 from "../../assets/cine5.jpg";
import cine6 from "../../assets/cine6.jpg";
import cine7 from "../../assets/cine7.jpg";
import cine8 from "../../assets/cine8.jpg";
import cine9 from "../../assets/cine9.jpg";
import cine10 from "../../assets/cine10.jpg";
import cine11 from "../../assets/cine7.jpg";
import cine12 from "../../assets/cine12.jpg";

const DATA = [
  {
    id: 1,
    image: cine1,
  },
  {
    id: 2,
    image: cine2,
  },
  {
    id: 3,
    image: cine3,
  },
  {
    id: 4,
    image: cine4,
  },
  {
    id: 5,
    image: cine5,
  },
  {
    id: 6,
    image: cine6,
  },
];

const DATA1 = [
  {
    id: 1,
    image: cine7,
  },
  {
    id: 2,
    image: cine8,
  },
  {
    id: 3,
    image: cine9,
  },
  {
    id: 4,
    image: cine10,
  },
  {
    id: 5,
    image: cine11,
  },
  {
    id: 6,
    image: cine12,
  }
]

const Home: React.FC = () => {
  return (
    <Container>
      <FlatList
        data={DATA}
        keyExtractor={(data: any) => data.id}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        renderItem={({item}) => (
          <ContainerList>
            <Item key={item.id} source={item.image} />
          </ContainerList>
        )}
      />
      <FlatList
        data={DATA1}
        keyExtractor={(data: any) => data.id}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        renderItem={({item}) => (
          <ContainerList>
            <Item key={item.id} source={item.image} />
          </ContainerList>
        )}
      />
    </Container>
  )
}

export default Home;