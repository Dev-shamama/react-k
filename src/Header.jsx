const Header = (prop) => {
  return (
    <>
      <h1>Header</h1>
      <ul>
        {prop.zzz.map((i, index) => {
          return (
            <li key={index}>
              {i.id} -- {i.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Header;
