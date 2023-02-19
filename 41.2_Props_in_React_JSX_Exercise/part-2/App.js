const App = () => (
    <div className="tweets_container">
        < Tweet username="sarah555" name="Saarah" date="02/14/23" message="Hey baby!" />
        < Tweet username="nick421" name="Nick" date="10/14/23" message="JS Rocks!" />
        < Tweet username="Pancho" name="Lindo" date="5/14/20" message="I love my mommy." />
    </div>
);


ReactDOM.render(<App />, document.getElementById("root"));
