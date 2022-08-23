import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [associations, setAssociations] = useState([]);

  useEffect(() => {
    fetchAssociations();
  }, []);

  const fetchAssociations = async () => {
    const association = await fetch('http://localhost:5000/associations');
    const response = await association.json();
    setAssociations(response);
  };
  return (
    <>
      <h1 className="text-center mt-3">Associations</h1>
      <section>
        {associations.map((association) => {
          return (
            <Link to={`/${association.slug}`} key={association.name}>
              <img src={association.image} alt={`$association.name`}></img>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Home;
