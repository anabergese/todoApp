import { Component } from "react";
import {
  StyledMood,
  StyledCardMood,
  StyledSelectedMood,
} from "./Styles/Mood.styled";
import { IFeelings } from "../Types/index";

class Moods extends Component {
  constructor(props: string) {
    super(props);
    this.state = {
      error: null,
      loading: false as boolean,
      feelings: [],
      feel: null,
    };
  }

  componentDidMount() {
    // XANO (Free) plan rate limit: 10 requests (API calls) per 20 seconds.
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/feelings")
      .then((res) => res.json())
      .then(
        (result: IFeelings) => {
          this.setState({
            loading: true,
            feelings: result,
          });
        },
        (error: string) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  setMood = (feeling: IFeelings) => {
    console.log(feeling.Feel_id);
    console.log("feeling", feeling);
    // get feeling by id: https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/feelings/1
    const id = feeling.Feel_id;
    fetch(`https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/feelings/${id}`)
      .then((res) => res.json())
      .then(
        (result: string) => {
          console.log("result feel", result);
          this.setState({
            feel: result,
          });
        },
        (error: string) => {
          this.setState({
            error,
          });
        }
      );
  };

  render() {
    const feelings = this.state.feelings;
    const feel = this.state.feel;
    console.log("feel render", feel);
    if (!this.state.loading) {
      return <h2>loading...</h2>;
    }

    if (feel) {
      return (
        <StyledMood>
          <StyledSelectedMood>
            <img src={feel.Image_URL} alt={`Feeling ${feel.Feeling}`} />
            <p>{feel.Feeling}</p>
          </StyledSelectedMood>
        </StyledMood>
      );
    }

    return (
      <>
        <h1>How do you feel today?</h1>
        <StyledMood>
          {feelings.map((feeling, index: number) => {
            return (
              <StyledCardMood
                key={index}
                onClick={() => {
                  this.setMood(feeling);
                }}
              >
                <img
                  src={feeling.Image_URL}
                  alt={`Feeling ${feeling.Feeling}`}
                />
                <p>{feeling.Feeling}</p>
              </StyledCardMood>
            );
          })}
        </StyledMood>
      </>
    );
  }
}

export default Moods;
