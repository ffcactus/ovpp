function isStorableApplianceObj(obj) {
    if(obj.url === undefined) {
        return false;
    }
}

exports.isStorableApplianceObj = isStorableApplianceObj;