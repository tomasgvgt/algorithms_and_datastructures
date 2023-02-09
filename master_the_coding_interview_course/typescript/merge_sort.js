(function () {
    function divide(arr) {
        var mid = Math.floor(arr.length / 2);
        var l = arr.slice(0, mid);
        var r = arr.slice(mid, arr.length);
        return [l, r];
    }
    function merge(l, r) {
        var i = 0;
        var j = 0;
        var merged = [];
        while (i < l.length && j < r.length) {
            if (l[i] < r[j]) {
                merged.push(l[i]);
                i++;
            }
            else {
                merged.push(r[j]);
                j++;
            }
        }
        while (i < l.length) {
            merged.push(l[i]);
            i++;
        }
        while (j < r.length) {
            merged.push(r[j]);
            j++;
        }
        return merged;
    }
    function mergeSort(arr) {
        var _a;
        if (arr.length === 1) {
            return arr;
        }
        var l;
        var r;
        _a = divide(arr), l = _a[0], r = _a[1];
        l = mergeSort(l);
        r = mergeSort(r);
        return merge(l, r);
    }

    console.log(mergeSort([2, 5, 1, 0, 4, 10, 8]));
})();
