'use strict';
class Node{
    constructor(val){
        this.next=null;
        this.val=val;
        this.previous=null;
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    add(key){
        let newNode = new Node(key);
        if(this.length===0){
            // create a new node 
                this.head=newNode;
                this.tail=newNode;
                ++this.length;
                return this;
        }else{
            // append
                let currentNode=this.tail;
                currentNode.next = newNode;
                newNode.previous=currentNode;
                this.tail=newNode;
                ++this.length;
                return this;
        }
    }

    contains(key){
        if(this.length === 0){
            return false;
        }
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.val == key){
                return true;
            }
            currentNode=currentNode.next;
        }
        // Default is
            return false;
    }

    remove(key){
        if(this.length === 0){
            return false;
        }
        let currentNode = this.head;
        if(this.length===1 && this.head.val==key){
            this.head=null;
            this.tail=null;
            this.length=0;
            return true;
        }
        let idx=0;
        while(currentNode){          
            if(currentNode.val === key){          
              // breaking the link
              // Case #1: Remove last node
                if(this.length === idx+1){
                  // console.log('okay you want to remove last node');
                  if(this.length > 0){
                    // console.log('there are more than 1 nodes in the list');
                    let previousNode = currentNode.previous;
                    this.tail = previousNode;
                    --this.length;
                    return true;
                  }
                }
              // Case #2: it is middle node  
              else if(this.length > 1 && idx!==0){
                // console.log('it is the midle node');
                let previousNode =currentNode.previous;
                let nextNode = currentNode.next;
                previousNode.next = nextNode;
                nextNode.previous = previousNode;
                --this.length;
                return true;
              }
              // Case #3: the very first node
              else if(this.length>=1 && idx+1==1){
                // console.log('very first node');
                let nextNode = currentNode.next;
                this.head = nextNode;
                this.head.previous=null;
                nextNode.previous=this.head;
                --this.length;
                return true;
              }
            }
            currentNode=currentNode.next;
            ++idx;
        }
        // Default is
            return false;        
    }
}

class MyHashSet{
    constructor(){
        this.size=20;
        this.hTable = new Array(this.size);        
    }
    hash(key){
        return key%this.size;
    }
    add(key){        
        let idx=this.hash(key);
        // chain this index with the doubly linked list 
        if(!this.hTable[idx]){
            this.hTable[idx] = new DoublyLinkedList();            
        }
        let linkedList = this.hTable[idx];            
        // Safeguard
            if(linkedList.contains(key)){
                return false;
            }
        return linkedList.add(key);
        //console.log(this.hTable);
        
    }
    remove(key){
        let idx=this.hash(key);
        // is there linked list at that index         
        if(!this.hTable[idx]){
            return false;
        }
        // if yes then find and remove it
        let linkedList = this.hTable[idx];            
        return linkedList.remove(key);
    }

    contains(key){
        let idx=this.hash(key);
        // is there linked list at that index         
        if(!this.hTable[idx]){
            return false;
        }
        // if yes then does it contains the key supplied?
        let linkedList = this.hTable[idx];            
        return linkedList.contains(key);
        
    }
}

let hset = new MyHashSet();
console.log(hset.add(448));
console.log(hset.remove(152));
console.log(hset.add(38));
console.log(hset.add(105));
console.log(hset.add(217));
console.log(hset.contains(105));
console.log(hset.add(241));
console.log(hset.remove(571));
console.log(hset.add(868));
console.log(hset.add(199));
console.log(hset.remove(477));
console.log(hset.add(987));
console.log(hset.add(272));
console.log(hset.add(106));
console.log(hset.add(854));
console.log(hset.contains(199));
console.log(hset.add(950));
console.log(hset.remove(312));
console.log(hset.remove(505));
console.log(hset.contains(272));
console.log(hset.add(108));
console.log(hset.contains(749));
console.log(hset.add(826));
console.log(hset.contains(108));
console.log(hset.add(258));
console.log(hset.add(452));
console.log(hset.remove(642));
console.log(hset.add(168));
console.log(hset.add(740));
console.log(hset.add(915));
console.log(hset.add(800));
console.log(hset.add(623));
console.log(hset.remove(844));
console.log(hset.remove(371));
console.log(hset.add(937));
console.log(hset.remove(790));
console.log(hset.add(809));
console.log(hset.contains(604));
console.log(hset.add(193));
console.log(hset.add(338));
console.log(hset.add(385));
console.log(hset.remove(917));
console.log(hset.remove(150));
console.log(hset.add(350));
console.log(hset.add(729));
console.log(hset.remove(335));
console.log(hset.add(553));
console.log(hset.remove(467));
console.log(hset.add(967));
console.log(hset.add(93));
console.log(hset.remove(283));
console.log(hset.contains(848));
console.log(hset.add(199));
console.log(hset.add(410));
console.log(hset.add(133));
console.log(hset.add(161));
console.log(hset.add(40));
console.log(hset.contains(553));
console.log(hset.add(275));
console.log(hset.contains(410));
console.log(hset.remove(661));
console.log(hset.add(899));
console.log(hset.add(387));
console.log(hset.add(948));
console.log(hset.add(758));
console.log(hset.add(732));
console.log(hset.add(419));
console.log(hset.add(735));
console.log(hset.contains(133));
console.log(hset.add(630));
console.log(hset.remove(178));
console.log(hset.add(13));
console.log(hset.add(744));
console.log(hset.contains(168));
console.log(hset.add(568));
console.log(hset.add(14));
console.log(hset.contains(105));
console.log(hset.add(702));
console.log(hset.remove(616));
console.log(hset.add(304));
console.log(hset.add(678));
console.log(hset.add(240));
console.log(hset.contains(677));
console.log(hset.add(923));
console.log(hset.add(734));
console.log(hset.remove(294));
console.log(hset.add(511));
console.log(hset.remove(824));
console.log(hset.add(347));
console.log(hset.add(586));
console.log(hset.add(129));
console.log(hset.remove(609));
console.log(hset.add(54));
console.log(hset.add(320));
console.log(hset.add(717));
console.log(hset.add(6));
console.log(hset.contains(106));
console.log(hset.add(410));
console.log(hset.add(365));
console.log(hset.add(48));
console.log(hset.add(439));
console.log(hset.remove(135));
console.log(hset.add(94));
console.log(hset.add(321));
console.log(hset.add(665));
console.log(hset.add(633));
console.log(hset.add(109));
console.log(hset.add(882));
console.log(hset.add(786));
console.log(hset.contains(38));
console.log(hset.add(946));
console.log(hset.contains(426));
console.log(hset.contains(287));
console.log(hset.add(371));
console.log(hset.remove(980));
console.log(hset.contains(20));
console.log(hset.add(628));
console.log(hset.add(925));
console.log(hset.add(450));
console.log(hset.remove(785));
console.log(hset.add(495));
console.log(hset.remove(87));
console.log(hset.add(649));
console.log(hset.contains(379));
console.log(hset.add(377));
console.log(hset.remove(984));
console.log(hset.remove(140));
console.log(hset.add(120));
console.log(hset.add(398));
console.log(hset.add(708));
console.log(hset.contains(665));
console.log(hset.add(960));
console.log(hset.contains(946));
console.log(hset.add(585));
console.log(hset.contains(40));
console.log(hset.add(524));
console.log(hset.add(535));
console.log(hset.add(957));
console.log(hset.contains(94));
console.log(hset.add(214));
console.log(hset.add(552));
console.log(hset.add(481));
console.log(hset.contains(436));
console.log(hset.add(395));
console.log(hset.add(526));
console.log(hset.add(538));
console.log(hset.contains(923));
console.log(hset.remove(411));
console.log(hset.add(563));
console.log(hset.contains(371));
console.log(hset.contains(481));
console.log(hset.add(590));
console.log(hset.add(500));
console.log(hset.add(550));
console.log(hset.add(838));
console.log(hset.contains(639));
console.log(hset.add(198));
console.log(hset.add(63));
console.log(hset.remove(742));
console.log(hset.add(579));
console.log(hset.add(587));
console.log(hset.remove(55));
console.log(hset.add(208));
console.log(hset.contains(347));
console.log(hset.add(190));
console.log(hset.add(297));
console.log(hset.add(357));
console.log(hset.remove(421));
console.log(hset.remove(333));
console.log(hset.add(955));
console.log(hset.add(504));
console.log(hset.add(275));
console.log(hset.add(134));
console.log(hset.remove(13));
console.log(hset.remove(414));
console.log(hset.add(44));
console.log(hset.remove(610));
console.log(hset.add(522));
console.log(hset.add(18));
console.log(hset.contains(106));
console.log(hset.add(78));
console.log(hset.remove(641));
console.log(hset.add(391));
console.log(hset.add(850));
console.log(hset.add(167));
console.log(hset.add(275));
console.log(hset.contains(448));
console.log(hset.remove(2));
console.log(hset.contains(854));
console.log(hset.add(15));
console.log(hset.add(577));
console.log(hset.contains(133));
console.log(hset.add(366));
console.log(hset.add(484));
console.log(hset.add(125));
console.log(hset.add(507));
console.log(hset.add(775));
console.log(hset.add(38));
console.log(hset.add(670));
console.log(hset.remove(179));
console.log(hset.add(412));
console.log(hset.remove(866));
console.log(hset.add(514));
console.log(hset.add(355));
console.log(hset.remove(537));
console.log(hset.remove(143));
console.log(hset.remove(843));
console.log(hset.add(907));
console.log(hset.remove(35));
console.log(hset.add(579));
console.log(hset.contains(412));
console.log(hset.add(118));
console.log(hset.contains(850));
console.log(hset.contains(814));
console.log(hset.add(174));
console.log(hset.add(828));
console.log(hset.add(591));
console.log(hset.add(520));
console.log(hset.add(678));
console.log(hset.add(50));
console.log(hset.add(187));
console.log(hset.remove(717));
console.log(hset);
console.log(hset.contains(717));

