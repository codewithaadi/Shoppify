import { FC } from "react";
import { imageURL } from "../../constants/data";
import { Grid, styled } from "@mui/material";

const Wrapper = styled(Grid)`
  margin-top: 10px;
  justify-content: space-between;
`;

const Banner: FC = () => {
  return (
    <>
      
      <Wrapper item lg={12} sm={12} md={12} xs={12} container>
        {imageURL.map((image,index) => (
          <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
            <img src={image} alt="Ads" style={{ width: "100%" }} />
          </Grid>
        ))}
      </Wrapper>
    </>
  );
};

export default Banner;
