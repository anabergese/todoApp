import { Component } from "react";

class About extends Component {
  constructor(props: string) {
    super(props);
    this.state = {
      error: null,
      loading: false,
      feelings: [],
      //selected_feeling
    };
  }

type IFeeling = {
  id: number,
  created_at: number,
  Feeling: string,
  Image_URL: string
  };
  
type IFeelings = IFeeling[];

  componentDidMount() {
    fetch("https://x8ki-letl-twmt.n7.xano.io/api:NVDikdaO/feelings")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            loading: true,
            feelings: result as IFeeling,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    // feeling = ["Happy", "Sad", "Angry", "Scared", "Hungry", "Thirsty", "Tired", "Confident"]
    const feelings = this.state.feelings;

    if (!this.state.loading) {
      return <h2>loading...</h2>;
    }

    return (
      <div>
        <h1>How are you feeling today</h1>
        {feelings.map((feeling: IFeeling, index: number) => (
          <div key={index}>
            <img src={feeling.Image_URL} alt={`Feeling ${feeling.Feeling}`} />
            <p>I am feeling {feeling.Feeling} today.</p>
          </div>
        ))}
      </div>
    );
  }
}

export default About;
