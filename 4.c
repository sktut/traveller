#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
#include <string.h>

#define MAX 100

typedef struct {
    int node;
    int cost;
} Edge;

typedef struct {
    Edge edges[MAX];
    int edge_count;
} AdjList;

typedef struct {
    int node;
    int cost;
} PQNode;

typedef struct {
    PQNode data[MAX];
    int size;
} PriorityQueue;

AdjList graph[MAX];
int dist[MAX];
int parent[MAX];
int visited[MAX];

void push(PriorityQueue *pq, PQNode node) {
    int i = pq->size++;
    while (i > 0 && pq->data[(i - 1) / 2].cost > node.cost) {
        pq->data[i] = pq->data[(i - 1) / 2];
        i = (i - 1) / 2;
    }
    pq->data[i] = node;
}

PQNode pop(PriorityQueue *pq) {
    PQNode min = pq->data[0];
    PQNode last = pq->data[--pq->size];
    int i = 0;
    while (2 * i + 1 < pq->size) {
        int child = 2 * i + 1;
        if (child + 1 < pq->size && pq->data[child + 1].cost < pq->data[child].cost)
            child++;
        if (last.cost <= pq->data[child].cost)
            break;
        pq->data[i] = pq->data[child];
        i = child;
    }
    pq->data[i] = last;
    return min;
}

void add_edge(int u, int v, int cost) {
    graph[u].edges[graph[u].edge_count++] = (Edge){v, cost};
    graph[v].edges[graph[v].edge_count++] = (Edge){u, cost};
}

void uniform_cost_search(int start, int goal, int n) {
    PriorityQueue pq;
    pq.size = 0;

    for (int i = 0; i < n; i++) {
        dist[i] = INT_MAX;
        parent[i] = -1;
        visited[i] = 0;
    }

    dist[start] = 0;
    push(&pq, (PQNode){start, 0});

    while (pq.size > 0) {
        PQNode current = pop(&pq);
        int u = current.node;

        if (visited[u]) continue;
        visited[u] = 1;

        if (u == goal) break;

        for (int i = 0; i < graph[u].edge_count; i++) {
            int v = graph[u].edges[i].node;
            int cost = graph[u].edges[i].cost;
            if (dist[u] + cost < dist[v]) {
                dist[v] = dist[u] + cost;
                parent[v] = u;
                push(&pq, (PQNode){v, dist[v]});
            }
        }
    }

    if (dist[goal] == INT_MAX) {
        printf("No path found.\n");
        return;
    }

    int path[MAX], idx = 0;
    int temp = goal;
    while (temp != -1) {
        path[idx++] = temp;
        temp = parent[temp];
    }

    printf("Uniform Cost Search Path: ");
    for (int i = idx - 1; i >= 0; i--)
        printf("%d ", path[i]);
    printf("\nTotal Cost: %d\n", dist[goal]);
}

void bfs_unweighted(int start, int goal, int n) {
    int queue[MAX], front = 0, rear = 0;
    int visited[MAX] = {0}, parent[MAX];
    memset(parent, -1, sizeof(parent));

    visited[start] = 1;
    queue[rear++] = start;

    while (front < rear) {
        int u = queue[front++];
        if (u == goal) break;
        for (int i = 0; i < graph[u].edge_count; i++) {
            int v = graph[u].edges[i].node;
            if (!visited[v]) {
                visited[v] = 1;
                parent[v] = u;
                queue[rear++] = v;
            }
        }
    }

    printf("BFS Path (Unweighted): ");
    int path[MAX], idx = 0;
    int temp = goal;
    while (temp != -1) {
        path[idx++] = temp;
        temp = parent[temp];
    }
    for (int i = idx - 1; i >= 0; i--)
        printf("%d ", path[i]);
    printf("\n");
}

int main() {
    int n = 6;

    for (int i = 0; i < n; i++) graph[i].edge_count = 0;

    add_edge(0, 1, 2);
    add_edge(0, 2, 5);
    add_edge(1, 2, 1);
    add_edge(1, 3, 2);
    add_edge(2, 4, 3);
    add_edge(3, 4, 1);
    add_edge(3, 5, 5);
    add_edge(4, 5, 2);

    int start = 0, goal = 5;

    uniform_cost_search(start, goal, n);
    bfs_unweighted(start, goal, n);

    return 0;
}
