function Footer() {
  return (
    <footer className="bg-[#204f0f] text-white py-6">
      <div className="container mx-auto text-sm leading-5 text-center py-4 px-6 space-y-3">
        <p className="text-center">
          &copy; {new Date().getFullYear()}
          <b> JET Limited</b> | All Rights Reserved.
        </p>
        <nav className="mt-2">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="/state_display/#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
