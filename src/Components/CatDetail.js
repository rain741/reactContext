import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Card, Row, Col } from "react-bootstrap";
import axios from "axios";
function CatDetail() {
  const { namaKucing } = useParams();
  console.log(namaKucing);

  let [cat, setCat] = useState([]);
  useEffect(() => {
    axios(`https://api.thecatapi.com/v1/breeds/search?q=${namaKucing}`).then(
      (result) => {
        console.log(result.data);
        setCat(result.data);
      }
    );
  }, []);
  console.log(cat);
  return (
    <div>
      <h4>Cat's Detail</h4>

      <Row xs={1} md={4} className='g-4'>
        {cat.map((item) => (
          <Col>
            <Card style={{ width: "100%", height: "100%" }}>
              <br />
              <Card.Body>
                <Card.Title style={{ textAlign: "center", color: "red" }}>
                  {item.name}
                </Card.Title>
                <Card.Text style={{ textAlign: "left" }}>
                  <h5>{item.description}</h5>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CatDetail;
