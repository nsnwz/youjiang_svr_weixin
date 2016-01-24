/**
 * Created by miller on 2016/1/9.
 */

var dataapi = require('./dataapi');
var item = require('./item');



var task = function() {
    this._task = {day : {
                          10001 : {num : 0, FinNum : 0},
                          10002 : {num : 0, FinNum : 0},
                          10003 : {num : 0, FinNum : 0},
                          10004 : {num : 0, FinNum : 0},
                          10005 : {lv1 : 0, lv2 : 0, lv3 : 0, lv4 : 0, lv5 : 0, FinNum : 0},
                          10006 : {lv1 : 0, lv2 : 0, lv3 : 0, lv4 : 0, lv5 : 0, FinNum : 0},
                          10007 : {lv1 : 0, lv2 : 0, lv3 : 0, lv4 : 0, lv5 : 0, FinNum : 0},
                          10008 : {lv1 : 0, lv2 : 0, lv3 : 0, lv4 : 0, lv5 : 0, FinNum : 0},
                          30001 : {num : 0, FinNum : 0}
                         },
              forEver : {
                          20001 : {num : 0, FinNum :0},
                          20002 : {num : 0, FinNum : 0},
                          20003 : {num : 0, FinNum : 0},
                          20004 : {num : 0, FinNum : 0},
                          20005 : {num : 0, FinNum : 0},
                          20006 : {num : 0, FinNum : 0},
                          20007 : {num : 0, FinNum : 0},
                          20008 : {num : 0, FinNum : 0},
                          20009 : {num : 0, FinNum : 0},
                          20010 : {num : 0, FinNum : 0},
                          20011 : {num : 0, FinNum : 0},
                          20012 : {num : 0, FinNum : 0},
                          20013 : {num : 0, FinNum : 0},
                          20014 : {num : 0, FinNum : 0},
                          20015 : {num : 0, FinNum : 0},
                          20016 : {num : 0, FinNum : 0},
                          20017 : {num : 0, FinNum : 0},
                          20018 : {num : 0, FinNum : 0},
                          20019 : {num : 0, FinNum : 0},
                          20020 : {num : 0, FinNum : 0},
                          40001 : {num : 0, FinNum : 0},
                          40002 : {num : 0, FinNum : 0},
                          40003 : {num : 0, FinNum : 0},
                          40004 : {num : 0, FinNum : 0},
                          40005 : {num : 0, FinNum : 0},
                          100000 : {num : 0, FinNum : 0}


                         }};
                  };

task.prototype.cleanDayTask = function() {
    for (var key in this._task.day) {
        for (var idx in this._task.day[key]) {
            this._task.day[key][idx] = 0;
        }
    }
};

task.prototype.updateTask10001 = function(itemID) {
    if (item.getSeedType(itemID) == 1) {
        this._task.day[10001].num += 1;
    }
};

task.prototype.updateTask10002 = function(itemID) {
    if (item.getSeedType(itemID) == 2) {
        this._task.day[10002].num += 1;
    }
};

task.prototype.updateTask10003 = function(itemID) {
    if (item.getSeedType(itemID) == 3) {
        this._task.day[10003].num += 1;
    }
};

task.prototype.updateTask10004 = function(itemID) {
    if (item.getSeedType(itemID) == 4) {
        this._task.day[10004].num += 1;
    }
};

task.prototype.updateTask10005 = function(itemID) {
    if (item.getSeedType(itemID) == 1) {
        var lv = item.getSeedLv(itemID);
        if (lv == 1) {
            this._task.day[10005].lv1 += 1;
        } else if (lv == 2) {
            this._task.day[10005].lv2 += 1;
        } else if (lv == 3) {
            this._task.day[10005].lv3 += 1;
        } else if (lv == 4) {
            this._task.day[10005].lv4 += 1;
        } else if (lv == 5) {
            this._task.day[10005].lv5 += 1;
        }
    }
};

task.prototype.updateTask10006 = function(itemID) {
    if (item.getSeedType(itemID) == 2) {
        var lv = item.getSeedLv(itemID);
        if (lv == 1) {
            this._task.day[10006].lv1 += 1;
        } else if (lv == 2) {
            this._task.day[10006].lv2 += 1;
        } else if (lv == 3) {
            this._task.day[10006].lv3 += 1;
        } else if (lv == 4) {
            this._task.day[10006].lv4 += 1;
        } else if (lv == 5) {
            this._task.day[10006].lv5 += 1;
        }
    }
};

task.prototype.updateTask10007 = function(itemID) {
    if (item.getSeedType(itemID) == 3) {
        var lv = item.getSeedLv(itemID);
        if (lv == 1) {
            this._task.day[10007].lv1 += 1;
        } else if (lv == 2) {
            this._task.day[10007].lv2 += 1;
        } else if (lv == 3) {
            this._task.day[10007].lv3 += 1;
        } else if (lv == 4) {
            this._task.day[10007].lv4 += 1;
        } else if (lv == 5) {
            this._task.day[10007].lv5 += 1;
        }
    }
};

task.prototype.updateTask10008 = function(itemID) {
    if (item.getSeedType(itemID) == 4) {
        var lv = item.getSeedLv(itemID);
        if (lv == 1) {
            this._task.day[10008].lv1 += 1;
        } else if (lv == 2) {
            this._task.day[10008].lv2 += 1;
        } else if (lv == 3) {
            this._task.day[10008].lv3 += 1;
        } else if (lv == 4) {
            this._task.day[10008].lv4 += 1;
        } else if (lv == 5) {
            this._task.day[10008].lv5 += 1;
        }
    }
};

task.prototype.updateTask30001 = function(starNum) {
    this._task.day[30001].num += starNum;
};

task.prototype.updateTask20001To20020 = function(itemID) {
    var type = item.getSeedType(itemID);
    if (type == 1) {
        this._task.forEver[20001].num += 1;
        this._task.forEver[20002].num += 1;
        this._task.forEver[20003].num += 1;
        this._task.forEver[20004].num += 1;
        this._task.forEver[20005].num += 1;
    } else if (type == 2) {
        this._task.forEver[20006].num += 1;
        this._task.forEver[20007].num += 1;
        this._task.forEver[20008].num += 1;
        this._task.forEver[20009].num += 1;
        this._task.forEver[20010].num += 1;
    } else if (type == 3) {
        this._task.forEver[20011].num += 1;
        this._task.forEver[20012].num += 1;
        this._task.forEver[20013].num += 1;
        this._task.forEver[20014].num += 1;
        this._task.forEver[20015].num += 1;
    } else if (type == 4) {
        this._task.forEver[20016].num += 1;
        this._task.forEver[20017].num += 1;
        this._task.forEver[20018].num += 1;
        this._task.forEver[20019].num += 1;
        this._task.forEver[20020].num += 1;
    }
};

task.prototype.updateTask40001To40005 = function(starNum) {
    this._task.forEver[40001].num += starNum;
    this._task.forEver[40002].num += starNum;
    this._task.forEver[40003].num += starNum;
    this._task.forEver[40004].num += starNum;
    this._task.forEver[40005].num += starNum;
};

task.prototype.updateTask100000 = function(starNum) {
    this._task.forEver[100000].num += 1;
};

function checkTaskType1 (task, taskID, ele) {
    if (task.day[taskID].num < ele.seedLvN) {
        return false;
    }
    if (task.day[taskID].FinNum >= ele.dayCanNum) {
        return false;
    }
    return true;
};

function checkTaskType2 (task, taskID, ele) {
    if (task.day[taskID].lv1 < ele.seedLv1 || task.day[taskID].lv2 < ele.seedLv2 || task.day[taskID].lv3 < ele.seedLv3
        || task.day[taskID].lv4 < ele.seedLv4 || task.day[taskID].lv5 < ele.seedLv5) {
        return false;
    }
    if (task.day[taskID].FinNum >= ele.dayCanNum) {
        return false;
    }
    return true;
};

function checkTaskType3 (task, taskID, ele) {
    if (task.day[taskID].num < ele.num) {
        return false;
    }
    if (task.day[taskID].FinNum >= ele.dayCanNum) {
        return false;
    }
    return true;
};

function checkTaskType4 (task, taskID, ele) {
    if (task.forEver[taskID].num < ele.seedLvN) {
        return false;
    }
    if (task.forEver[taskID].FinNum >= ele.forNum) {
        return false;
    }
    return true;
};

function checkTaskType5 (task, taskID, ele) {
    if (task.forEver[taskID].num < ele.num) {
        return false;
    }
    if (task.forEver[taskID].FinNum >= ele.forNum) {
        return false;
    }
    return true;
};

task.prototype.taskCheck = {
    10001 : checkTaskType1,
    10002 : checkTaskType1,
    10003 : checkTaskType1,
    10004 : checkTaskType1,
    10005 : checkTaskType2,
    10006 : checkTaskType2,
    10007 : checkTaskType2,
    10008 : checkTaskType2,
    30001 : checkTaskType3,
    20001 : checkTaskType4,
    20002 : checkTaskType4,
    20003 : checkTaskType4,
    20004 : checkTaskType4,
    20005 : checkTaskType4,
    20006 : checkTaskType4,
    20007 : checkTaskType4,
    20008 : checkTaskType4,
    20009 : checkTaskType4,
    20010 : checkTaskType4,
    20011 : checkTaskType4,
    20012 : checkTaskType4,
    20013 : checkTaskType4,
    20014 : checkTaskType4,
    20015 : checkTaskType4,
    20016 : checkTaskType4,
    20017 : checkTaskType4,
    20018 : checkTaskType4,
    20019 : checkTaskType4,
    20020 : checkTaskType4,
    40001 : checkTaskType5,
    40002 : checkTaskType5,
    40003 : checkTaskType5,
    40003 : checkTaskType5,
    40003 : checkTaskType5,
    10000 : checkTaskType5
};

task.prototype.checkFinTask = function(p, taskID) {
    var ele = dataapi.task.findById(taskID);
    if (!ele) {
        return false;
    }
    console.log('taskCheck ', this.taskCheck);
    return this.taskCheck[taskID](this._task, taskID, ele);
};

function updateTaskFinType1 (task, taskID, ele) {
    task.day[taskID].FinNum += 1;
    return;
};

function updateTaskFinType2 (task, taskID, ele) {
    task.day[taskID].lv1 -= ele.seedLv1;
    task.day[taskID].lv2 -= ele.seedLv2;
    task.day[taskID].lv3 -= ele.seedLv3;
    task.day[taskID].lv4 -= ele.seedLv4;
    task.day[taskID].lv5 -= ele.seedLv5;
    task.day[taskID].FinNum += 1;
    return;
};

function updateTaskFinType3 (task, taskID, ele) {
    task.forEver[taskID].FinNum += 1;
    return;
};

task.prototype.updateTask = {
    10001: updateTaskFinType1,
    10002: updateTaskFinType1,
    10003: updateTaskFinType1,
    10004: updateTaskFinType1,
    10005: updateTaskFinType2,
    10006: updateTaskFinType2,
    10007: updateTaskFinType2,
    10008: updateTaskFinType2,
    30001: updateTaskFinType1,
    20001: updateTaskFinType3,
    20002: updateTaskFinType3,
    20003: updateTaskFinType3,
    20004: updateTaskFinType3,
    20005: updateTaskFinType3,
    20006: updateTaskFinType3,
    20007: updateTaskFinType3,
    20008: updateTaskFinType3,
    20009: updateTaskFinType3,
    20010: updateTaskFinType3,
    20011: updateTaskFinType3,
    20012: updateTaskFinType3,
    20013: updateTaskFinType3,
    20014: updateTaskFinType3,
    20015: updateTaskFinType3,
    20016: updateTaskFinType3,
    20017: updateTaskFinType3,
    20018: updateTaskFinType3,
    20019: updateTaskFinType3,
    20020: updateTaskFinType3,
    40001: updateTaskFinType3,
    40002: updateTaskFinType3,
    40003: updateTaskFinType3,
    40004: updateTaskFinType3,
    40005: updateTaskFinType3
};

task.prototype.updateTaskFin = function(taskID) {
    var ele = dataapi.task.findById(taskID);
    if (!ele) {
        return false;
    }
    this.updateTask[taskID](this._task, taskID, ele);
};

task.prototype.giveTaskReward = function(p, taskID) {
    var ele = dataapi.task.findById(taskID);
    if (!ele) {
        return null;
    }
    p.addCoins(ele.reward1);
    p.addCoins(ele.reward2);
    p.addItem(ele.reward3, 1);
    p.saveAttribute();
    p.saveItem();
    return {reward1 : ele.reward1, reward2 : ele.reward2, reward3 : ele.reward3};
};

module.exports = task;