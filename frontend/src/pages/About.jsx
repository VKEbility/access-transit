export default function About() {
  return (
    <>
      <h1>About</h1>
      <p>Our app, AccessTransit, is designed to address these critical gaps 
        in current transit accessibility features by leveraging crowd-sourced 
        data to provide reliable, real-time updates on station accessibility, 
        giving users the tools necessary to safely and efficiently plan their 
        journeys with confidence. Additionally, we offer multilingual sign 
        translations to create a more inclusive commuting experience for New 
        Yorkers. Our goal is to help users travel more independently and 
        confidently, regardless of their physical or linguistic needs. 
      </p>
      <p>
        The Access Transit app will do so by enabling real-time updates about 
        changes to the operational status of MTA’s accessibility features, 
        including elevators and escalators. It will be user-friendly, employing 
        an intuitive design with aesthetic appeal so that anyone of any age can 
        use it. Additionally, it will feature an automatic translation capability 
        using AI models like OpenAI's Whisper, ensuring non-English speakers can 
        navigate the app with ease. 
      </p>

      <p>
        There will be two types of users: heroes (volunteer contributors) and 
        users (those needing assistance). The app will be aware of the hero's 
        location, and if within an MTA station, they will be prompted to update 
        if escalators/elevators are working. Users can update the status of 
        escalators/elevators within MTA stations, upgrading their profile to Hero 
        status. Still, all users can check the current status of any station’s 
        accessibility features. Both user types can save their frequently visited 
        stations for quick access, and a potential feature could allow users to 
        plan trips based on stations with functional accessibility options.
      </p>
    </>
  );
};

