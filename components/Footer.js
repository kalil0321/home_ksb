import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} /> for you.
        <div>Contacts 
          <div><a href= "https://instagram.com/kalil0321">
            <img href="https://commons.wikimedia.org/wiki/File:Instagram_logo.svg" alt="Instagram Logo" />
            </a> 
          </div>
        </div>
      </footer>
    </>
  )
}
