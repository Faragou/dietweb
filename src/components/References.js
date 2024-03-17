// References.js

import React from 'react';
import './References.css';
import ReferenceBox from './ReferenceBox';
import Card from './Card';
import Carousel from './Carousel';

const References = () => {
    const referencess = [
    { imageUrl: 'https://media.istockphoto.com/id/1432226243/hu/fotó/boldog-színes-bőrű-fiatal-nő-mosolyog-a-kamerába-egy-stúdióban.jpg?s=612x612&w=0&k=20&c=BFMCBouxcQO4cjPb5IzzzVaNYLtUCamP8SwTQg-xC0k=', comment: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit."' },
    { imageUrl: 'https://media.istockphoto.com/id/1331257339/hu/fotó/portré-boldog-érett-ember-visel-szemüveget-és-nézi-a-kamera-beltéri.jpg?s=612x612&w=0&k=20&c=ktKyl4dNLuqzZKF19DHHUZoayhAA5RcnLgicE0rZeYY=', comment: '"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."' },
    { imageUrl: 'https://media.istockphoto.com/id/1281083606/hu/fotó/fotó-vonzó-bájos-hölgy-aranyos-bobbed-hairdo-karok-keresztezett-magabiztos-személy.jpg?s=612x612&w=0&k=20&c=UxZAdzJ0cN7sDMB4pQUVIAdxvARyt_EClSwf3x-Zr88=', comment: '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."' },
    { imageUrl: 'https://media.istockphoto.com/id/1399395748/hu/fotó/vidám-szemüveges-üzletember-aki-kezével-az-arca-alatt-pózol-mosolyogva-az-irodában-játékos.jpg?s=612x612&w=0&k=20&c=Y1f8NDUGwF8dXYfyj31TT5m3WlAEcj41xTaWT7i3AMs=', comment: '"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."' }
  ];

    return (
        <div id="references">
            <h2>References</h2>
            <div className="reference-container">
                <Carousel>
      {referencess.map((ref, index) => (
        <Card key={index} imageUrl={ref.imageUrl} comment={ref.comment}/>
        ))}
      </Carousel>
            </div>
        </div>
    );
};

export default References;
