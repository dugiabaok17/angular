import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../api/color';
@Injectable()
export class ColorService {

    private apiUrl = 'http://localhost:8080/api/v1/admin';

    constructor(private http: HttpClient) { }

    public getData(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/color`);
    }

    public addColor(color: Color): Observable<Color> {
        return this.http.post<Color>(`${this.apiUrl}/color`, color);
    }

    public updateColor(color: Color): Observable<Color> {
        return this.http.put<Color>(`${this.apiUrl}/color`, color);
    }

    public deleteColor(colorId: number): Observable<Color> {
        return this.http.put<Color>(`${this.apiUrl}/color/${colorId}`,colorId);
    }
}
