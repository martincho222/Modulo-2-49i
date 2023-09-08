import { Card } from "react-bootstrap";

const GifGridItem = ({ gif }) => {
  const { url, title } = gif;

  return (
    <Card style={{ width: "18rem" }} className="h-100">
      <Card.Img variant="top" src={url} alt={url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default GifGridItem;
