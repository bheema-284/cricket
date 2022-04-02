import '../App.css';
export const Advertises = () => {
  return (
    <div id="advertises">
      <div id="form-loc">
        <div id="advertise">
          <h1>Advertise With Us</h1>
          <p>
            Please give us your contact details and a short note on your
            requirements. Our ad sales team will get back to you.
          </p>
        </div>

        <div id="formdiv">
          <form action="">
            Name:
            <input type="text" name="" id="inptssn" placeholder="Name" />
            <br />
            Email:
            <input type="text" name="" id="inptsse" placeholder="Email" />
            <br />
            Moblie Number
            <input
              type="number"
              name=""
              id="inptssmn"
              placeholder="Mobile Number"
            />
            <br />
            Company Name:
            <input
              type="text"
              name=""
              id="inptsscn"
              placeholder="Company Name"
            />
            <br />
            City:
            <input type="text" name="" id="inptssc" placeholder="City" />
            <br />
            Subject:
            <input type="text" name="" id="inptsss" placeholder="Subject" />
            <br />
            Requirements:
            <textarea name="" id="inptssr" cols="30" rows="10"></textarea>
            <br />
            <input type="submit" name="" id="inptsssss" />
          </form>
        </div>
      </div>
      <hr />
      <div id="addss">
        <h2>Office Contact Details</h2>
        <p>
          TIMES INTERNET LTD. Regd. Office: Express Building, 9-10, Bahadurshah
          Zafar Marg, New Delhi, - 110002, INDIA Corp. Office: No. 190-B, 2nd
          Floor, HN Plaza,100 Ft Ring road, 6th Main, BSK 3rd Stage, Bangalore -
          560085, INDIA Phone : 080-26790623
        </p>
        <div id="maps">
          <iframe
            width="100%"
            height="100%"
            src="https://maps.google.com/maps?q=bangalore&t=&z=14&ie=UTF8&iwloc=&output=embed"
            frameborder="0"></iframe>
        </div>
      </div>
    </div>
  );
};
