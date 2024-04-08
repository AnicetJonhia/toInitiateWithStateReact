import { Card, CardBody, CardImg, CardTitle, CardText, Button, Col } from 'reactstrap';

const CardsPlants = ({ plantsList, likeOrDislikePlant }) => (
  <>
    {plantsList.map((plant, key) => {
      const { id, image, name, reaction } = plant;
      const thumbsIcon = reaction === 'like' ? 'up' : 'down';
      const likeButtonText = reaction === 'like' ? "Je n'aime pas" : "J'aime";

      return (
        <Col key={key} xs="6" md="2" lg="2" className="mb-2">
          <Card>
            <CardImg top src={image} alt={name} />
            <CardBody>
              <CardTitle>{name}</CardTitle>
              <CardText>
                <i className={`text-warning fas fa-thumbs-${thumbsIcon}`}></i>
              </CardText>
              <CardText>
                <Button 
                  onClick={() => likeOrDislikePlant(id)}
                  className="btn btn-primary form-control">{likeButtonText}</Button>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      );
    })}
  </>
);

export default CardsPlants;
