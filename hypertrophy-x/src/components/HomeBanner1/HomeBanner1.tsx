import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/joy";
import styles from "./HomeBanner1.module.css";

const HomeBanner1 = () => {
  const [data, setData] = useState<any>(null);

  const getData = async () => {
    let temp = [
      {
        name: "Calories Intake",
        value: 2000,
        unit: "kcal",
        goal: 2500,
        goalUnit: "kcal",
      },
      {
        name: "Sleep",
        value: 8,
        unit: "hrs",
        goal: 8,
        goalUnit: "hrs",
      },
      {
        name: "Steps",
        value: 50,
        unit: "steps",
        goal: 10000,
        goalUnit: "steps",
      },
      {
        name: "Water",
        value: 2000,
        unit: "ml",
        goal: 3000,
        goalUnit: "ml",
      },
      {
        name: "Weight",
        value: 75,
        unit: "kg",
        goal: 70,
        goalUnit: "kg",
      },
      {
        name: "Workout",
        value: 2,
        unit: "days",
        goal: 6,
        goalUnit: "days",
      },
    ];
    setData(temp);
    console.log(temp);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.meters}>
        {data?.length > 0 &&
          data.map((item: any, index: number) => {
            let percentage;

            if (item.value < item.goal) {
              percentage = (item.value / item.goal) * 100;
            } else {
              percentage = (item.goal / item.value) * 100;
            }

            return (
              <div className={styles.card} key={index}>
                <div className={styles.cardHeader} >
                  <div className={styles.cardHeaderBox}>
                    <div className={styles.cardHeaderBoxName}>
                      {item.name}
                    </div>
                    <div className={styles.cardHeaderBoxValue}>
                      {item.value} {item.unit} / {item.goal} {item.goalUnit}
                    </div>
                  </div>
                </div>

                <div className={styles.circularProgressWrapper}>
                  <CircularProgress
                    color="primary"
                    determinate
                    variant="solid"
                    value={percentage}
                    size="lg"
                  />
                  <div className={styles.percentageText}>
                    {parseFloat(percentage.toFixed(1))}%
                  </div>
                </div>
              </div>
            );
          })}
      </div>
 

    </div>
  );
};

export default HomeBanner1;
