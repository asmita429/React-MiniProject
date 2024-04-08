import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import "./InfoBox.css";

export default function InfoBox() {
  let IMG_url =
    "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  let weatherInfo = {
    city: "tansen",
    temp: 20,
    tempMin: 15,
    tempMax: 22,
    humidity: 20,
    feelsLike: 19,
    weather: "clear-sky",
  };
  return (
    <div className="InfoBox">
      <h1>Weather Information</h1>
      <div className="cardContent">
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={IMG_url}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weatherInfo.city}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <div>Temperature: {weatherInfo.temp}&deg;C</div>
              <div>Minumum Temperature: {weatherInfo.tempMin}&deg;C</div>
              <div>Maximum Temperature: {weatherInfo.tempMax}&deg;C</div>
              <div>Humidity: {weatherInfo.humidity}</div>
              <div>
                The weather is <i>{weatherInfo.weather}</i> and feels like{" "}
                {weatherInfo.feelsLike}&deg;C
              </div>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
