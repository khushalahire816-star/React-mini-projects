import styles from "./Welcome.module.css";

const WelcomeMessage = ({todoItems}) =>{
  return (todoItems.length === 0 && <p className = {styles.welcome}>I like you all of you Guyss....</p>
  );
}

export default WelcomeMessage;