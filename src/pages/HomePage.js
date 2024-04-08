import React, { useState } from "react";
import CardsPlants from "../components/CardPlants";
import { Plants } from "../utils/Plants";
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';

const HomePage = () => {
  const [filters, setFilters] = useState([]);
  const [plantsList, setPlantsList] = useState(Plants);

  const searchPlant = (e) => {
    const value = e.target.value;
    const newPlants = Plants.filter((plant) => plant.name.toLowerCase().includes(value.toLowerCase()));
    setPlantsList(newPlants);
  }

  const filterPlantCategory = async (e) => {
    const value = e.target.value;
    const newFilters = filters.includes(value) ? filters.filter((filter) => filter !== value) : [...filters, value];
    const newPlants = newFilters.length > 0 ? Plants.filter((plant) => newFilters.includes(plant.category)) : Plants;
    setFilters(newFilters);
    setPlantsList(newPlants);
  }

  const likeOrDislikePlant = (id) => {
    const newPlants = plantsList.map((plant) => {
      if (plant.id === id) {
        return {
          ...plant,
          reaction: plant.reaction === 'like' ? 'dislike' : 'like'
        }
      }
      return plant;
    });
    setPlantsList(newPlants);
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Liste des Plantes</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form>
            <FormGroup>
              <Label for="search">Rechercher</Label>
              <Input
                type="text"
                id="search"
                onChange={(e) => searchPlant(e)}
              />
            </FormGroup>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="form-check">
            <Input className="form-check-input" type="checkbox" value="classique" id="classique" onChange={(e) => filterPlantCategory(e)} />
            <Label className="form-check-label" for="classique">
              Classique
            </Label>
          </div>
          <div className="form-check">
            <Input className="form-check-input" type="checkbox" value="plante_grasse" id="plante_grasse" onChange={(e) => filterPlantCategory(e)} />
            <Label className="form-check-label" for="plante_grasse">
              Plante Grasse
            </Label>
          </div>
          <div className="form-check">
            <Input className="form-check-input" type="checkbox" value="exterieure" id="exterieure" onChange={(e) => filterPlantCategory(e)} />
            <Label className="form-check-label" for="exterieure">
              Extérieure
            </Label>
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <CardsPlants plantsList={plantsList} likeOrDislikePlant={likeOrDislikePlant} />
      </Row>
    </Container>
  );
}

export default HomePage;
