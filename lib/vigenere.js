var $vg = (() => 
    {    
        let vigenere = 
        {   
            //Generate basic table with all characters 
            _generetedTable : function() {
                        let _table = [];

                        //Loop load talble from Character 32 TO 255 
                        for(_i=32;_i<255;_i++)
                            _table.push(String.fromCharCode(_i));
                
                        this.table = _table;
                    },
            //Table with all characters
            table : [],
            //Key used to encrypt text
            key : '',
            //Method encrypt
            encrypt : function (str)
                        {
                            if(this.table.length == 0)
                                this._generetedTable();

                            return str.split('').map((c, index) => {
                                //Ci = (Pi + Ki) mod lenght Table 

                                //Get index letter in letter's table  
                                let _Pi = this.table.indexOf(c);
                                //Get what letter to get for search in table
                                let _Ki = index % this.key.length;
                                //Find key letter in table
                                _Ki =  this.table.indexOf(this.key[_Ki]);

                                //Execute crip
                                let newChar = (_Pi + _Ki) % this.table.length; 

                                return this.table[newChar];
                            }).join('');
                        },
            //Method descrypt
            descrypt : function (str)
                        {
                            //if table is empty call method to load table
                            if(this.table.length == 0)
                                this._generetedTable();

                            return str.split('').map((c, index) => {
                                //Pi = (Ci - Ki + length table) mod length table 

                                //Get index letter in letter's table  
                                let _Ci = this.table.indexOf(c);
                                //Get what letter to get for search in table
                                let _Ki = index % this.key.length;
                                //Find key letter in table
                                _Ki =  this.table.indexOf(this.key[_Ki]);

                                //Execute crip
                                let newChar = (_Ci - _Ki + this.table.length) % this.table.length; 

                                return this.table[newChar];
                            }).join('');
                        }
        }
        
        //if table is empty call method to load table
        if(vigenere.table.length == 0)
            vigenere._generetedTable();

        //Add property in String to Encrypt with Vigenere Cipher
        String.prototype.vigenereCrip = function (key) {
                vigenere.key = key;
                return vigenere.encrypt(this);
            };
            
        //Add property in String to Descrypt with Vigenere Cipher
        String.prototype.vigenereDecrip = function (key) {
            vigenere.key = key;
            return vigenere.descrypt(this);
        }; 

        //Object available to the user 
        return {
            generatedRandomKey : function(size)
            {
                let _key = [];

                //Loop generated Key
                for(_i=0;_i<size;_i++)
                {
                    let _index = Math.floor((Math.random() * vigenere.table.length) + 1);
                    _key.push(vigenere.table[_index]); 
                }
                   
                return _key.join('');
            }
        }
    })();

