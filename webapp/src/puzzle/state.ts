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
// github:SymbolNotFound/hexaban/webapp/src/puzzle/state.ts

import { HexGrid } from '../hexgrid/topology'
import { HexIndex, Direction } from '../hexgrid/layout'

// Represents the only effectful player move, pushing a crate in a direction.
export interface CratePush {
  crateCoord: HexIndex
  direction: Direction
}

// Represents the current state of a Hexoban puzzle, based on its initial state
// and the sequence of moves made by the solver.  The additional information
// (worker's position and the distribution of crates) is derivedd from these
// and represented here for convenience, but when serialized it only needs to
// persist the sequence of pushes, even the routing of moves is optional.
export class PuzzleState {
  readonly initial: HexGrid
  readonly pushes: Array<CratePush>

  constructor (base: HexGrid) {
    this.initial = base
    this.pushes = []
  }
}
