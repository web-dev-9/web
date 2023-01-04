import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Style Sheet URL:</h1>
      <p>Copy the below URL and Paste it at the top of the CSS file</p>
      <textarea rows="10" cols="40">
        @import
        url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap');
      </textarea>
      <h2>Reference Image:</h2>
      <img
        src="https://res.cloudinary.com/dwwimfezn/image/upload/v1671639062/Screenshot_513_mevfzg.png"
        alt="ref"
      />

      <h1>Background Image URL: </h1>
      <textarea rows="5" cols="40">
        https://us.123rf.com/450wm/pilvitus/pilvitus1903/pilvitus190300028/pilvitus190300028.jpg?ver=6
      </textarea>
      <h1>BootstrapCDN: </h1>
      <textarea rows="20" cols="40">
        {`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>

<script src="https://kit.fontawesome.com/20c5629a29.js" crossorigin="anonymous"></script>`}
      </textarea>
    </div>
  );
}

export default App;
