import React, { useState, useEffect } from "react";
import "./App.css";
import HotelCard from "./components/HotelCard/HotelCard";
import ActionsBar from "./components/ActionsBar/ActionsBar";
import Container from "@material-ui/core/Container/Container";
import Skeleton from "@material-ui/lab/Skeleton";
import { Paper, Typography } from "@material-ui/core";
import { Logo } from "./components/Logo/Logo";

const App: React.FC = () => {
  const [data, setData] = useState({ results: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const hotels = await require("./utils/data.json");
        const formattedHotelResults = hotels.results.map((result: any) => {
          return {
            imageSrc: result.property.previewImage.url,
            caption: result.property.previewImage.caption,
            offer: result.offer.promotion.title,
            street: result.property.address[0],
            city: result.property.address[1],
            amount: result.offer.displayPrice.amount,
            currency: result.offer.displayPrice.currency,
            savings: result.offer.savings ? result.offer.savings.amount : null,
            title: result.property.title,
            cancellationType: result.offer.cancellationOption.cancellationType,
            roomOffer: result.offer.name
          };
        });
        setData({
          results: formattedHotelResults.sort(
            (a: any, b: any) => a.amount - b.amount
          )
        });
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  /* Loading and Error states are shown here only to show that 
      I can do this given enough time. UX needs to be improved here */
  if (isLoading) {
    return <Skeleton variant="rect"></Skeleton>;
  }
  if (isError) {
    return (
      <Paper>
        <Typography>No Hotels Found</Typography>
      </Paper>
    );
  }

  return (
    <>
      {!(isLoading && isError) && (
        <Container fixed>
          <Logo />
          <ActionsBar
            hotelCount={data.results.length}
            // Not available in the data payload at root level
            location="Sydney"
            // Ideally this sort should happen on server
            // here we will call fetch data again passing appropriate sort direction
            // So we will store sortDirection in state and change in that will trigger the sideeffect
            handleHotelsSort={(sortDirection: number) => {
              setData({
                results: data.results.sort(
                  (a: any, b: any) => sortDirection * (a.amount - b.amount)
                )
              });
            }}
          />
          {data.results.map((props, index) => (
            <HotelCard {...props} key={index} />
          ))}
        </Container>
      )}
    </>
  );
};

export default App;
