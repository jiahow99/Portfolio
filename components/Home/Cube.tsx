export default function Cube() {
    const cubeSpanStyles = (i: number) => ({
        position: 'absolute',
        width: '100%',
        height: '100%',
        // top: 0,
        // left: 0,
        transform: `rotateY(calc(90deg * ${i})) translateZ(37.5px)`,
        background: 'linear-gradient(to bottom, ' +
          'hsl(330, 3.13%, 25.1%) 0%, ' +
          'hsl(177.27, 21.71%, 32.06%) 5.5%, ' +
          'hsl(176.67, 34.1%, 36.88%) 12.1%, ' +
          'hsl(176.61, 42.28%, 40.7%) 19.6%, ' +
          'hsl(176.63, 48.32%, 43.88%) 27.9%, ' +
          'hsl(176.66, 53.07%, 46.58%) 36.6%, ' +
          'hsl(176.7, 56.94%, 48.91%) 45.6%, ' +
          'hsl(176.74, 62.39%, 50.91%) 54.6%, ' +
          'hsl(176.77, 69.86%, 52.62%) 63.4%, ' +
          'hsl(176.8, 76.78%, 54.08%) 71.7%, ' +
          'hsl(176.83, 83.02%, 55.29%) 79.4%, ' +
          'hsl(176.85, 88.44%, 56.28%) 86.2%, ' +
          'hsl(176.86, 92.9%, 57.04%) 91.9%, ' +
          'hsl(176.88, 96.24%, 57.59%) 96.3%, ' +
          'hsl(176.88, 98.34%, 57.93%) 99%, ' +
          'hsl(176.89, 99.07%, 58.04%) 100%)',
      });

    return (
        <div className="cube-loader">
            <div className="cube-top"></div>
            <div className="cube-wrapper">
            {[0, 1, 2, 3].map((i) => (
                <span key={i} className="cube-span" style={cubeSpanStyles(i) as React.CSSProperties}></span>
            ))}
            </div>
        </div>

        // <div className="spinner">
        //     <div className="spinner1"></div>
        // </div>
    )
}