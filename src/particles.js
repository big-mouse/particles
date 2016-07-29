/**
 * Particles plugin implementation
 * @param options {radius}
 * @returns Function(Object, {num, size, radius, color, speed, distortion})
 */
// Note: not using "export default" es6 to bypass .default when using library globally from window scope.

import _ from 'lodash';

module.exports = exports = function(options= {radius:30}){

    let iteration = 1;
    let rad = options.radius;

    return {

        painter(self, options){

            const particles = getParticles(options, self.mouseCoords);

            return self => {

                self.canvas.ctx.globalCompositeOperation = 'source-over';
                self.canvas.ctx.fillStyle = 'transparent';
                self.canvas.ctx.clearRect(0, 0, self.canvas.el.width, self.canvas.el.height);
                self.canvas.ctx.fillRect(0, 0, self.canvas.el.width, self.canvas.el.height);

                let crad = rad * Math.sin(iteration / 30);

                self.canvas.ctx.globalCompositeOperation = 'lighter';

                particles.forEach(particle => {

                    self.canvas.ctx.strokeStyle = particle.color;
                    self.canvas.ctx.lineWidth = particle.size;
                    self.canvas.ctx.beginPath();

                    if(particle.radius) crad =  particle.radius * Math.sin(iteration / 30);

                    const x = self.mouseCoords.x + window.pageXOffset + (crad + particle.distortion * Math.sin(iteration / particle.tmod)) * Math.cos(particle.angle * 180 / Math.PI);
                    const y = self.mouseCoords.y + window.pageYOffset + (crad + particle.distortion * Math.sin(iteration / particle.tmod)) * Math.sin(particle.angle * 180 / Math.PI);

                    self.canvas.ctx.moveTo(particle.lastPos.x, particle.lastPos.y);
                    self.canvas.ctx.lineTo(x, y);

                    particle.lastPos = { x, y };
                    particle.angle = (particle.angle + particle.speed) % 359;

                    self.canvas.ctx.stroke();
                });

                iteration++;
            }
        }
    }

}

/**
 * Create particles accordingly to input options
 * @param options
 * @param mouse The mouse coordinates
 * @returns {Array}
 */
function getParticles(options, mouse){

    const rand = (min, max) => Math.random() * (max - min) + min;

    let particles = [];

    while(~~options.num--) {

        const angle = rand(0, 359);

        particles = [...particles, {
            color: options.color ? (_.isFunction(options.color) ? options.color() : options.color) : `hsla(${(rand(0,1) > .5) ? ~~rand(0, 20) : ~~rand(180, 200)},100%,60%,1)`,
            distortion: rand(0,options.distortion ? options.distortion : 10),
            tmod: rand(5, 15),
            size: rand(1, options.size),
            speed: rand(1, options.speed ? options.speed : 3) / 10000,
            angle: angle,
            radius: options.radius,
            lastPos: {
                x: mouse.x,
                y: mouse.y
            }
        }];
    }

    return particles
}
