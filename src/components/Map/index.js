const MapComponent = () => {
  return (
    <div style={{width : '100%'}}>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3404.049594684531!2d73.08726787560836!3d31.44030157425076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI2JzI1LjEiTiA3M8KwMDUnMjMuNCJF!5e0!3m2!1sen!2s!4v1696758987043!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{border: 0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    </div>
  );
};
export default MapComponent;
