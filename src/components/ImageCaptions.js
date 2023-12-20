// components/MenuItem.js
import React from 'react';

const ImageCaptions = ({ item }) => {
    return (
        <div style={styles.container}>
          <img
            src={item.image}
            alt={item.caption}
            style={styles.image}
          />
          <p style={styles.caption}>{item.caption}</p>
        </div>
      );
    };
    
    const styles = {
      container: {
        margin: '8px',
        borderRadius: '8px',
        overflow: 'hidden',
      },
      image: {
        width: '100%',
        height: '150px',
        borderRadius: '8px',
      },
      caption: {
        marginTop: '8px',
        textAlign: 'center',
        fontSize: '16px',
        fontWeight: 'bold',
      },
    };
export default ImageCaptions;
