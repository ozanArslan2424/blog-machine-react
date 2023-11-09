function Footer() {
  return (
    <footer
      id="footer"
      className=" border-t border-neutral-500 text-neutral-500 p-4 flex justify-center text-sm w-full"
    >
      <em>
        Made by{" "}
        <a
          href="https://github.com/ozanArslan2424"
          className="hover:cursor-pointer hover:text-sky-500 hover:no-underline underline"
        >
          Ozan Arslan
        </a>{" "}
        for TPÖÇG. &#169; 2023
      </em>
    </footer>
  );
}

export default Footer;
