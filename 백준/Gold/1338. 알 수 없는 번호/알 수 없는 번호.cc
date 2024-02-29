#include <bits/stdc++.h>
#define fastio ios::sync_with_stdio(0), cin.tie(0), cout.tie(0)
using namespace std;

#define int int64_t
const int INF = INT_MAX;

int32_t main() {
	fastio;
	int l, r, x, y; cin >> l >> r >> x >> y; x = abs(x); //ans = Q * x + y, ans ⊂ [l, r]
	if (l > r) swap(l, r);
	if (r - l >= 2 * x || !(0 <= y && y < x)) return !(cout << "Unknwon Number" << '\n');
	else {
		vector<int> v;
		int st = l;
		if ((l % x + x) % x == y);
		else if ((l % x + x) % x <= y) st += y - (l % x + x) % x;
		else st += x - (l % x + x) % x + y;
		for (int i = st; i <= r; i += x) {
			if ((i % x + x) % x == y) v.push_back(i);
			if (v.size() > 1) return !(cout << "Unknwon Number" << '\n');
		}
		if (v.empty()) cout << "Unknwon Number" << '\n';
		else cout << v[0] << '\n';
	}
}