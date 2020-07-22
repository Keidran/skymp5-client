import { Movement, Transform } from './components/movement';
import { Look } from './components/look';
import { Animation } from './components/animation';
import { Value } from './components/value';

export enum MsgType {
    CustomPacket = 1,
    UpdateMovement = 2,
    UpdateAnimation = 3,
    UpdateLook = 4,
    UpdateValue = 5
};

export interface CreateActorMessage {
    type: 'createActor';
    idx: number;
    transform: Transform;
    isMe: boolean;
    look: Look;
    values:Array<Value>;
}

export interface DestroyActorMessage {
    type: 'destroyActor';
    idx: number;
}

export interface UpdateMovementMessage {
    t: MsgType.UpdateMovement;
    idx: number;
    data: Movement;
}

export interface UpdateAnimationMessage {
    t: MsgType.UpdateAnimation;
    idx: number;
    data: Animation;
}

export interface UpdateLookMessage {
    t: MsgType.UpdateLook;
    idx: number;
    data: Look;
}

export interface SetRaceMenuOpenMessage {
    type: 'setRaceMenuOpen';
    open: boolean;
}

export interface UpdateValuesMessage {
    t: MsgType.UpdateValue;
    idx: number;
    data: Value;
}