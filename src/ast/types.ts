/*
 Copyright (c) 42Crunch Ltd. All rights reserved.
 Licensed under the GNU Affero General Public License version 3. See LICENSE.txt in the project root for license information.
*/

export interface Node {
  getChildren(): Node[];
  getDepth(): number;
  getKey(): string;
  getValue(): string;
  getParent(): Node;
  find(pointer: string): Node;
  getRange(): [number, number];
  findNodeAtOffset(offset: number): Node | undefined;
  getJsonPonter(): string;
}
