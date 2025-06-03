import { useEffect, useState } from "react";

type Program = {
  id: number;
  title: string;
};

function Programs() {
  const [series, setSeries] = useState<Program[]>([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((response) => response.json())
      .then((data) => {
        setSeries(data);
      });
  }, []);

  return (
    <div>
      <h1>Liste des séries</h1>
      <ul>
        {series.map((program) => (
          <li key={program.id}>
            <strong>{program.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Programs;
