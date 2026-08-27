function Footer() {
  return (
    <footer
      translate="no"
      className="bg-bg-primary dark:bg-bg-primary dark:text-font-primary text-font-primary transition-colors duration-500"
    >
      <hr className="border-gray-700 border-t " />
      <p className="m-3 text-center text-sm font-light">
        &copy; {new Date().getFullYear()} Nerses Balaian. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
