#include <iostream>
#include <stdio.h>
#include <string>
#include <algorithm>
#include <vector>
#include <queue>
#pragma warning(disable:4996)
using namespace std;

#define INF 987654321

int tc, n, m, w;
vector<pair<pair<int, int>,int>> edge;
vector<long long> dist(501, INF);

int main() {
	cin >> tc;
	while (tc--) {
		cin >> n >> m >> w;
		int start, end, cost;
		bool yes = 0;
		for (int i = 0; i < m; i++) {
			scanf("%d %d %d", &start, &end, &cost);
			edge.push_back({ {start,end},cost });
			edge.push_back({ { end,start }, cost });
		}
		for (int i = 0; i < w; i++) {
			scanf("%d %d %d", &start, &end, &cost);
			edge.push_back({ { start,end }, -cost });
		}

		dist[1] = 0;
		for (int i = 1; i <= n - 1; i++) {
			for (int j = 0; j < edge.size(); j++) {
				int start = edge[j].first.first;
				int end = edge[j].first.second;
				int cost = edge[j].second;
				long long next_cost = cost + dist[start];
				if (dist[end] > next_cost) {
					dist[end] = next_cost;
				}
			}
		}

		for (int i = 0; i < edge.size(); i++) {
			int start = edge[i].first.first;
			int end = edge[i].first.second;
			int cost = edge[i].second;
			long long next_cost = cost + dist[start];
			if (dist[end] > next_cost) {
				yes = 1;
			}
		}

		if (yes)
			cout << "YES" << '\n';
		else
			cout << "NO" << '\n';

		// init
		dist.assign(501, INF);
		edge.clear();
	}

	return 0;
}