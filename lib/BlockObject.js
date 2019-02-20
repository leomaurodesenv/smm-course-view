/**
 * @module BlockObject
 * This class represents the block objects.
 * 
 * @author Leonardo Mauro <leo.mauro.desenv@gmail.com> (http://leonardomauro.com/)
 * @link https://github.com/leomaurodesenv/smm-course-viewer GitHub
 * @license https://opensource.org/licenses/GPL-3.0 GNU Public License (GPLv3)
 * @copyright 2019 Leonardo Mauro
 * @package smm-course-viewer
 * @access public
 */
class BlockObject extends CourseObject {
 
    /**
     * @method module:BlockObject
     * Constructor of class
     * @extends CourseObject
     * @arg {Object} _object
     * @instance
     * @access public
     * @return {this}
     */
    constructor(_object) {
        super(_object);
        this.name = BlockObject.names[this.type];
        this.size = 1;
    }
    
    /**
     * @method module:BlockObject::isBlock
     * Check if is a block
     * @arg {Integer} _type     Game type
     * @static
     * @access public
     * @return {Boolean}
     */
    static isBlock(_type) {
        return (BlockObject.names[_type]) ? true : false;
    }
}

/**
 * Objects Name
 * @access public
 */
BlockObject.names = {
    4: 'RengaBlock', /* Brick Block */
    5: 'HatenaBlock', /* '?' Block */
    6: 'HardBlock', /* Wooden Block */
    7: 'Ground', /* Terrain */
    8: 'Coin',
    9: 'Dokan', /* Pipe */
    14: 'GroundMushroom', /* Terrain: Mushroom */
    16: 'GroundBox', /* Terrain: Box */
    17: 'Bridge', 
    21: 'ChikuwaBlock', /* Donut Lift */
    22: 'KumoBlock', /* Cloud Block */
    23: 'OnpuBlock', /* Note Block */
    26: 'GroundGoal', 
    29: 'ClearBlock', /* Clear '?' Block */
    37: 'GroundStart', 
    53: 'BeltConveyor', /*  */
    63: 'IceBlock',
};

/**
 * Objects Code
 * @access public
 */
BlockObject.codes = {
    RengaBlock: 4,
    HatenaBlock: 5,
    HardBlock: 6,
    Ground: 7,
    Coin: 8,
    Dokan: 9,
    GroundMushroom: 14,
    GroundBox: 16,
    Bridge: 17,
    ChikuwaBlock: 21,
    KumoBlock: 22,
    OnpuBlock: 23,
    GroundGoal: 26,
    ClearBlock: 29,
    GroundStart: 37,
    BeltConveyor: 53,
    IceBlock: 63,
};