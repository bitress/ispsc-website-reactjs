
const Ads = () => {
  return (
    <div style={adsContainerStyle}>
      <img
        src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/215948009_329304502271957_1215325054360038364_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeE2hLTYAEMxTVhA6RVra3OwIzcOG7FRuRkjNw4bsVG5GapnQkomSmNq2ZGJQ7K9nr_6940GDW7oHNJreVIhQWpd&_nc_ohc=MhjvTTiXHtgAX-hAMhZ&_nc_ht=scontent.fcrk1-4.fna&oh=00_AfCYNSSXIZu0F3H31xDp8YOvIIV73l7OwjR1YIFWB18odg&oe=657BE341"
        alt="Advertisement"
        style={adsImageStyle}
      />
      <p style={adsTextStyle}>Discover Exciting Deals!</p>
    </div>
  );
};

const adsContainerStyle = {
  textAlign: 'center',
  backgroundColor: '#f4f4f4',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  margin: '20px 0',
};

const adsImageStyle = {
  maxWidth: '100%',
  borderRadius: '8px',
};

const adsTextStyle = {
  marginTop: '10px',
  color: '#777',
  fontSize: '16px',
};

export default Ads;
