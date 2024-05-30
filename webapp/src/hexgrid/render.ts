// Copyright (c) 2024 Symbol Not Found L.L.C.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// github:SymbolNotFound/hexaban/webapp/src/hexgrid/render.ts

// Represents a HexGrid and HexLayout in terms of the viewBox and local
// coordinate transforms of an enclosing SVG element.  This includes any
// panning and zooming done by the client to accommodate viewing a subset
// of the grid as represented by GridLayout.
export class GridView {
  // Homogeneous coordinates for applying translation (right column) along
  // with scale, rotation and shear transforms (top-left 2x2 submatrix).  The
  // bottom-right corner element is a normalization factor, rescale it to 1.0.
  transform: [[number, number, number],
              [number, number, number],
              [number, number, number]]

  svg: SVGSVGElement

  constructor (el: SVGSVGElement) {
    // Identity transform (zero translation, uniform projection).
    this.transform = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]]
    this.svg = el
  }
}