
function show(obj) {
    let body = document.getElementsByTagName('body')[0];

    let model = 
            `
            <div class="doraA">
                ${ obj.head == true ? "<header><div class='eye_left'></div><div class='eye_right'></div><div class='nose'></div><div class='face_left'></div><div class='face_mid'></div><div class='face_right'></div><div class='mouse'></div></header>" : " " }    
                ${ obj.body == true ? "<div class='tie'></div><div class='body'><div class='bell'></div><div class='onaka'><div class='pocket'></div></div></div>" : " "}
                ${ obj.left_hand == true ? "<div class='hand_left'></div>" : " " }
                ${ obj.right_hand == true ? "<div class='hand_right'></div>" : " " }
                <footer>
                ${ obj.left_leg == true ? "<div class='left_leg'></div><div class='mid_leg'></div>" : " " }
                ${ obj.right_leg == true ? "<div class='right_leg'></div><div class='mid_leg'></div>" : " " }    
                </footer>
            </div>
            `;

    body.innerHTML += model;
}

function set(obj) {
    for (item in obj) {
        obj["_" + item] = obj[item];
    }
    Object.defineProperties(obj, {
        body: {
            configurable: true,
            enumerable: true,
            get: function() {
                return this._body;
            },
            set: function(newValue) {
                this._body = newValue;
                show(obj);
            }
        },
        head: {
            configurable: true,
            enumerable: true,
            get: function() {
                return this._head;
            },
            set: function(newValue) {
                this._head = newValue;
                show(obj);
            }
        },
        left_hand: {
            configurable: true,
            enumerable: true,
            get: function() {
                return this._left_hand;
            },
            set: function(newValue) {
                this._left_hand = newValue;
                show(obj);
            }
        },
        right_hand: {
            configurable: true,
            enumerable: true,
            get: function() {
                return this._right_hand;
            },
            set: function(newValue) {
                this._right_hand = newValue;
                show(obj);
            }
        },
        left_leg: {
            configurable: true,
            enumerable: true,
            get: function() {
                return this._left_leg;
            },
            set: function(newValue) {
                this._left_leg = newValue;
                show(obj);
            }
        },
        right_leg: {
            configurable: true,
            enumerable: true,
            get: function() {
                return this._right_leg;
            },
            set: function(newValue) {
                this._right_leg = newValue;
                show(obj);
            }
        },
    })
}