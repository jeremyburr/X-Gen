import {
  addVectorLine,
  returnEndPosition,
  degreesToRadians,
  phi,
  addCurve,
  addLine,
} from '../js/utilities.js'

function Pincer(origin, unitLength) {

  const [orgX, orgY, orgZ] = origin;

  /*****************/

  //  X Pos Y Neg

  // Base
  addLine(
      [
        orgX + 2*unitLength,
        orgY + 4*unitLength,
        orgZ
      ],
      [
        orgX + 2*unitLength,
        orgY + 2*unitLength,
        orgZ
      ]
  );

  /*****************/

  //  X Pos Y Pos

  addVectorLine(
    'X_Pos_Y_Pos',
    [orgX + 2*unitLength, orgY + 4*unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XPosYPos = returnEndPosition(
    [orgX + unitLength, orgY + unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYPos = [
    [endPoint1XPosYPos[0] + unitLength, orgY + 4*unitLength, orgZ],
    [endPoint1XPosYPos[0] + unitLength, orgY + unitLength * 6.25, orgZ],
    [endPoint1XPosYPos[0] + unitLength * 4, orgY + unitLength * 6.25, orgZ],
  ]

  addCurve(coordinatesXPosYPos);

  /*****************/

  // Base
  addLine(
      [
        orgX + 2*unitLength,
        orgY - 4*unitLength,
        orgZ
      ],
      [
        orgX + 2*unitLength,
        orgY - 2*unitLength,
        orgZ
      ]
  );
  addVectorLine(
    'X_Pos_Y_Neg',
    [orgX + 2*unitLength, orgY - 4*unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XPosYNeg = returnEndPosition(
    [orgX + unitLength, orgY - unitLength, orgZ],
    [
      Math.cos(degreesToRadians(0)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXPosYNeg = [
    [endPoint1XPosYNeg[0] + unitLength, orgY - 4*unitLength, orgZ],
    [endPoint1XPosYNeg[0] + unitLength, orgY - unitLength * 6.25, orgZ],
    [endPoint1XPosYNeg[0] + unitLength * 4, orgY - unitLength * 6.25, orgZ],
  ]

  addCurve(coordinatesXPosYNeg);

  /*****************/

  // Base
  addLine(
      [
        orgX - 2*unitLength,
        orgY - 4*unitLength,
        orgZ
      ],
      [
        orgX - 2*unitLength,
        orgY - 2*unitLength,
        orgZ
      ]
  );

  addVectorLine(
    'X_Neg_Y_Neg',
    [orgX - 2*unitLength, orgY - 4* unitLength, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNegYNeg = returnEndPosition(
    [orgX - unitLength, orgY - unitLength, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(90)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNegYNeg = [
    [endPoint1XNegYNeg[0] - unitLength, orgY - 4 * unitLength, orgZ],
    [endPoint1XNegYNeg[0] - unitLength, orgY - unitLength * 6.25, orgZ],
    [endPoint1XNegYNeg[0] - unitLength * 4, orgY - unitLength * 6.25, orgZ],
  ]

  addCurve(coordinatesXNegYNeg);

  

  /*****************/

  //  X Neg Y Pos

  // Base
  addLine(
    [
      orgX - 2*unitLength,
      orgY + 2*unitLength,
      orgZ
    ],
    [
      orgX - 2*unitLength,
      orgY + 4*unitLength,
      orgZ
    ]
  );

  addVectorLine(
    'X_Neg_Y_Pos',
    [orgX - 2*unitLength, orgY + 4*unitLength, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi);

  const endPoint1XNegYPos = returnEndPosition(
    [orgX - unitLength, orgY + unitLength, orgZ],
    [
      Math.cos(degreesToRadians(180)),
      Math.cos(degreesToRadians(270)),
      Math.cos(degreesToRadians(90))
    ],
    unitLength * 1.25 * phi)

  const coordinatesXNegYPos = [
    [endPoint1XNegYPos[0] - unitLength, orgY + 4*unitLength, orgZ],
    [endPoint1XNegYPos[0] - unitLength, orgY + unitLength * 6.25, orgZ],
    [endPoint1XNegYPos[0] - unitLength * 4, orgY + unitLength * 6.25, orgZ],
  ]

  addCurve(coordinatesXNegYPos);


  

}

export {
  Pincer
}