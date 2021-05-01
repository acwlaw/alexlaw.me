import React, { useEffect, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Img from "gatsby-image";
import TextArea from "../components/TextArea";
import Layout from "../components/layout";

const About = () => {
  const SPOTIFY_LAST_PLAYED_PATH = "https://api.spotify.com/v1/me/player/recently-played?limit=1";
  const SPOTIFY_CURRENTLY_PLAYING_PATH = "https://api.spotify.com/v1/me/player/currently-playing?market=CA";
  const REQUEST_SPOTIFY_TOKEN_PATH = "https://accounts.spotify.com/api/token";

  const [trackToDisplay, setTrackToDisplay] = useState(undefined);
  const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState(false);

  // eslint-disable-next-line no-useless-concat
  const i = "d36191afeefc45d" + "dbe74670b776e5ee4";
  // eslint-disable-next-line no-useless-concat
  const s = "adbb40111d4446249" + "ddca8ef10f002fa";

  const imageData = useStaticQuery(graphql`
    query {
      aerialbg: file(relativePath: { eq: "aerialbg4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1115, webpQuality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }

      headShot: file(relativePath: { eq: "tentridge.JPG" }) {
        childImageSharp {
          fluid(webpQuality: 100) {
            ...GatsbyImageSharpFluid_withWebp
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);

  const requestSpotifyToken = () => fetch(REQUEST_SPOTIFY_TOKEN_PATH, {
    method: "POST",
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token:
          "AQBkA0Z5pyep_amhaIBGxwnNLy_GPN0VVrzXnFKb799OhFbZTnTBF2uAF_rgDfoq6NzWOaIlF6mtCK_XH9aBX5XnJJ-jbaEWy-Mo8eYh6Nr0Hea8DupZZ7NnsALvqvrbSOE",
      client_id: i,
      client_secret: s,
    }),
  });

  const getLastPlayedSongRequest = (accessToken) => fetch(SPOTIFY_LAST_PLAYED_PATH, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((songData) => {
      if (songData && songData.items && songData.items.length > 0) {
        return songData.items[0].track;
      }

      return undefined;
    })
    .catch((err) => {
      console.error(err);
    });

  const getCurrentlyPlayingSongRequest = (accessToken) => fetch(SPOTIFY_CURRENTLY_PLAYING_PATH, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response) {
        return response.json();
      }

      return undefined;
    })
    .then((songData) => {
      if (songData && songData.item) {
        return songData.item;
      }

      return undefined;
    })
    .catch((err) => {
      console.error(err);
    });

  useEffect(() => {
    document.title = "About — Alex Law";

    requestSpotifyToken()
      .then((response) => response.json())
      .then((data) => {
        getCurrentlyPlayingSongRequest(data.access_token).then(
          (currentTrack) => {
            if (currentTrack) {
              setIsCurrentlyPlaying(true);
              setTrackToDisplay({
                name: currentTrack.name.toLowerCase(),
                artist: currentTrack.artists[0].name.toLowerCase(),
              });
            } else {
              getLastPlayedSongRequest(data.access_token).then((lastTrack) => {
                if (lastTrack) {
                  setIsCurrentlyPlaying(false);
                  setTrackToDisplay({
                    name: lastTrack.name.toLowerCase(),
                    artist: lastTrack.artists[0].name.toLowerCase(),
                  });
                }
              });
            }
          },
        );
      });
  }, []);

  const TextAreaValue = () => (
    <Col style={{ maxWidth: 600 }}>
      <p>
        im a recent computer science and microbiology & immunology grad from the
        university of british columbia currently working as a software engineer
        at amazon
      </p>
      <p>
        full stack web and ios developer with a subtle passion for design with
        previous experience at apple and rbc
      </p>
      <br />
      <p>
        also an amateur cook, nature enthusiast and big time hockey and formula
        one fan
      </p>
      {trackToDisplay && isCurrentlyPlaying && (
        <p style={{ marginBottom: 0 }}>
          {`currently jamming out to ${trackToDisplay.name} by ${trackToDisplay.artist}`}
        </p>
      )}
      {trackToDisplay && !isCurrentlyPlaying && (
        <p style={{ marginBottom: 0 }}>
          {`last jammed out to ${trackToDisplay.name} by ${trackToDisplay.artist}`}
        </p>
      )}
    </Col>
  );

  return (
    <Layout>
      <Container style={{ maxWidth: 1110 }} className="vh-100" fluid>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div />
          <Row
            xs={1}
            sm={2}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Img
                className="about-headshot"
                style={{
                  borderRadius: 150,
                }}
                fluid={imageData.headShot.childImageSharp.fluid}
                alt="headshot"
              />
            </div>
            <TextArea>
              <TextAreaValue />
            </TextArea>
          </Row>
          <Img
            className="about-img"
            style={{
              borderRadius: "10px 10px 0px 0px",
            }}
            fluid={imageData.aerialbg.childImageSharp.fluid}
            alt="image"
          />
        </Col>
      </Container>
    </Layout>
  );
};

export default About;
